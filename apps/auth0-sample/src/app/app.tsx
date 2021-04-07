import React from 'react';
import styles from './app.module.scss';
import { ReactComponent as Logo } from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './login/login';
import Logout from './logout/logout';
import Profile from './profile/profile';
import ProtectedRoute from './auth/protected-route';
import ExternalApi from './external-api/external-api';

export function App() {
  const { isLoading, error, isAuthenticated } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className={styles.app}>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to auth0-sample!</h1>
      </header>
      {isAuthenticated ? <Logout /> : <Login />}
      <Switch>
        <Route path="/" exact component={UnprotectedPage} />
        <ProtectedRoute path="/profile" component={Profile} />
        <ProtectedRoute path="/external-api" component={ExternalApi} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;

const UnprotectedPage = () => (
  <div>
    <h1>This is Unprotected Page</h1>
  </div>
);
const NoMatch = () => <h1>404 Error: page does not exist!</h1>;
