import { createContext } from 'react';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';


Amplify.configure(amplifyconfig); 

// Create context with default values
const AmplifyContext = createContext({
    Amplify
});

export default AmplifyContext;
