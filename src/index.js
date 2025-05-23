import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-l2lnyzy2pf0z.frontegg.com/oauth',
  clientId: '9febcb3e-ff8f-4ad4-a3f4-c9f283aa54aa',
  appId: '320a0936-b042-442c-bfc5-5b574f8f3695'
};

const authOptions = {
  keepSessionAlive: true
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FronteggProvider
      contextOptions={contextOptions}
      hostedLoginBox={false}
      authOptions={authOptions}
    >
      <App />
    </FronteggProvider>
  </React.StrictMode>
);