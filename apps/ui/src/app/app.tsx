import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Routes from './routes';
import { CustomTheme } from './theme';

export function App() {
  return (
    <Router>
      <CustomTheme routes={Routes}>
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
      </CustomTheme>
    </Router>
  );
}

export default App;

export const NotFoundPage = () => (
  <div>
    <h1>404 - Not Found!</h1>
    <Link to="/">Go Home</Link>
  </div>
);
