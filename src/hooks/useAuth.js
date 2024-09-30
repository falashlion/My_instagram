// // useAuthListener.js
// import { useState, useEffect, useContext } from 'react';
// import AmplifyContext from './AmplifyContext';
// import { fetchAuthSession } from 'aws-amplify/auth';

// export default function useAuthListener() {
//     const [user, setUser] = useState(JSON.parse(localStorage.getItem("authUser")));
//     const { Amplify } = useContext(AmplifyContext);

//     useEffect(() => {
//         const listener = Amplify.Auth.currentAuthenticatedUser()
//             .then(authUser => {
//                 if (authUser) {
//                     localStorage.setItem("authUser", JSON.stringify(authUser));
//                     setUser(authUser);
//                 } else {
//                     localStorage.removeItem("authUser");
//                     setUser(null);
//                 }
//             })
//             .catch(() => {
//                 localStorage.removeItem("authUser");
//                 setUser(null);
//             });

//         return () => listener; // Clean up listener if needed
//     }, [Amplify]);

//     return { user };
// }


// // documentation https://ui.docs.amplify.aws/react/connected-components/authenticator/advanced