// import { useState, useContext, useEffect } from "react";
// import { getCurrentUser } from 'aws-amplify/auth';
// import UserContext from './../context/user';

// export default function useUser() {
//     const [activeUser, setActiveUser] = useState({});
//     // const { user } = useContext(UserContext);
//     const { user } = useContext({});

//     async function getUserObjByUserId() {
//         try {
//             const currentUser = await getCurrentUser();
//             setActiveUser(currentUser);
//         } catch (error) {
//             console.error('Error fetching user data: ', error);
//         }
//     }

//     const updateProfile = () => {
//         getUserObjByUserId();
//     }

//     useEffect(() => {
//         if (user) {
//             getUserObjByUserId();
//         }
//     }, [user]);

//     return { user: activeUser, updateProfile };
// }
