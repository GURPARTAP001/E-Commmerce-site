



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </StateProvider>
    </Router>
  </React.StrictMode>,
  
);
