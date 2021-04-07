# Auth0 Sample

## How to implement verification email resend mechanism

### Reference: [Why is user w/ unverified email considered authenticated? #227](https://github.com/auth0/auth0-spa-js/issues/227#issuecomment-536831876)

#### Step 1. Add this to a new Pre User Registration hook:

```typescript
module.exports = function (user, context, cb) {
  var response = {};
  response.user = user;
  user.user_metadata = user.user_metadata || {};
  user.user_metadata.emailVerificationSentDate = new Date().valueOf();
  console.log(
    `Set emailVerificationSentDate to ${user.user_metadata.emailVerificationSentDate}`
  );
  cb(null, response);
};
```

#### Step 2. Add this to a new Rule

```typescript
async function (user, context, callback) {
  user.user_metadata = user.user_metadata || {};
  if (!user.email_verified) {
    await resendVerificationEmailIfExpired();
    return callback(new UnauthorizedError("Please check for verification email and follow link before logging in."));
  } else {
    return callback(null, user, context);
  }

  async function resendVerificationEmailIfExpired() {
    const expirationPeriod = 1000 * 60 * 60 * 24; // one day
    const lastSent = user.user_metadata.emailVerificationSentDate;
    const now = new Date().valueOf();
    if (lastSent && now - lastSent < expirationPeriod) return;
    const ManagementClient = require("auth0@2.9.1").ManagementClient;
    const management = new ManagementClient({
      token: auth0.accessToken,
      domain: auth0.domain
    });
    const params = { user_id: user.user_id };
    try {
      const result = await management.sendEmailVerification(params);
      user.user_metadata.emailVerificationSentDate = now;
      console.log(`Set emailVerificationSentDate to ${user.user_metadata.emailVerificationSentDate}`);
    } catch (e) {
      console.log(`Unable to send email verification.`);
    }
  }
}
```
