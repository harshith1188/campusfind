import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7F6kEwMwrBDi3S8gHIyd4OXxxDaOajxk",
  authDomain: "campusfind-e3b27.firebaseapp.com",
  projectId: "campusfind-e3b27",
  storageBucket: "campusfind-e3b27.firebasestorage.app",
  messagingSenderId: "727939117046",
  appId: "1:727939117046:web:97e8cf2f1959c9d77fa1d7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);