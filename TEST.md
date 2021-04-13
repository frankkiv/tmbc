# React Testing

We use react-testing-library to create the virtual Dom for tests.
What is the basic requirements of react application?
(e.g. route, custom hook, smart component, dumb component)

## How to write a test for react route
https://testing-library.com/docs/example-react-router/

In the app.tsx file, we define our custom theme and app route here, please check the ./apps/ui/app.spec.tsx.
1. Mock UItheme just return the children component
2. Use render with router to mock the current url
3. Mock the current url and check the display component

## How to write a test for samrt component with mocking return value of react hook? (e.g. useParams)
Passing the Test with a Mock
We can get our test to pass pretty easily by mocking the hooks that React Router provides to us.

```
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: 590
  })
}));
```
If we run our test case again it will pass, however this is a pretty naive solution for several reasons.

Firstly, mocks in Jest are hoisted, **this makes it difficult to override our mock for a single test**.

Secondly, our test is now tied to our implementation. Our test is now reliant on us using the useParams hook, if we change the way we extract the post ID from the URL our test will fail.

Thirdly, using a mock means our test is now coupled with the test runner we are using, if you do decide to change test runners in the future it will require deeper changes to your test suite for it to work.

https://tomalexhughes.com/blog/testing-components-that-use-react-router-hooks
https://medium.com/@aarling/mocking-a-react-router-match-object-in-your-component-tests-fa95904dcc55

## How to write a test for customzie hook
https://react-hooks-testing-library.com/usage/basic-hooks

## how to write a test for reducer
Mock the action and pass it to the reducer to see if the result is as expected

```
import { reducer } from './reducer';
import { initialAuthState } from './auth-state';

describe('reducer', () => {
  it('should initialise when authenticated', async () => {
    const payload = {
      isAuthenticated: true,
      user: 'Bob',
    };
    expect(
      reducer(initialAuthState, { type: 'INITIALISED', ...payload })
    ).toEqual({
      ...initialAuthState,
      isLoading: false,
      ...payload,
    });
  });
```

## How to write a test for api request (axios as examples)
