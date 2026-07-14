import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7F6kEwMwrBDi3S8gHIyd4OXxxDaOajxk",
  authDomain: "campusfind-e3b27.firebaseapp.com",
  projectId: "campusfind-e3b27",
  storageBucket: "campusfind-e3b27.firebasestorage.app",
  messagingSenderId: "727939117046",
  appId: "1:727939117046:web:97e8cf2f1959c9d77fa1d7",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

// to  store the images in firebase
import { getStorage } from "firebase/storage";

export const storage = getStorage(app);