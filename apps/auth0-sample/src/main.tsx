import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.NX_REACT_AUTH0_DOMAIN;
const clientId = process.env.NX_REACT_AUTH0_CLIENTID;
const audience = process.env.NX_REACT_AUTH0_AUDIENCE;

console.log(domain)
console.log(clientId)
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        audience={audience}
        redirectUri={window.location.origin + '/profile'}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
