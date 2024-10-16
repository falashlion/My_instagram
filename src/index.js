import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "react-loading-skeleton/dist/skeleton.css";
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';


Amplify.configure(amplifyconfig); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode> 
      
);
