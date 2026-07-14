import { auth } from '../firebase/config';

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";


// register  screen
export const registerUser=async(email:string,password:string)=>{
    const userCredential=await createUserWithEmailAndPassword(auth,email,password);
    await sendEmailVerification(userCredential.user);
    return  userCredential
}


// Login User
export const loginUser = async (
  email: string,
  password: string
) => {
  return await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
};



// Logout User
export const logoutUser = async () => {
  await signOut(auth);
};


// Get Current User
export const getCurrentUser = () => {
  return auth.currentUser;
};


