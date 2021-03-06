import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Routes from './routes';
// import { CustomTheme } from './theme';
import { UiTheme } from '@tmbc/ui/theme';

export function App() {
  return (
    <Router basename={process.env.NX_APP_BASEURL}>
        <UiTheme routes={Routes}>
          <Switch>
            <Route path='/' exact component={HomePage} />
            {Routes.map((route) => (
              <Route
                path={route.path}
                key={route.path}
                component={route.component}
              />
            ))}
            <Route path='/NotFound' component={NotFoundPage} />
            <Redirect to="/NotFound" />
          </Switch>
        </UiTheme>
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
export const HomePage = () => (
  <div>
    <h1>This is Home Page</h1>
  </div>
);
