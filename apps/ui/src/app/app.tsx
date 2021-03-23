import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Routes from './routes';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Button from '@material-ui/core/Button';
import Header from './layouts/header';

export function App() {
  return (
    <>
      {/* <AppBar position="static">
          <Toolbar>
            <Button color="inherit">Login</Button>
          </Toolbar>
      </AppBar> */}
      <Router>
        <Header />
        <Switch>
          {Routes.map((route) => (
            <Route
              exact
              path={route.path}
              key={route.path}
              component={route.component}
            />
          ))}
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

export const NotFoundPage = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <Link to="/">Go Home</Link>
  </div>
);
