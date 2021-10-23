import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdU9-kabjwWAaLIaksxfjVWcRmyHQthrg",
  authDomain: "ytcodehub.firebaseapp.com",
  projectId: "ytcodehub",
  storageBucket: "ytcodehub.appspot.com",
  messagingSenderId: "1008861353046",
  appId: "1:1008861353046:web:e7de4c9c73ca74f30517f7",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export const register = (auth, email, password) =>
  createUserWithEmailAndPassword(auth, email, password).catch((error) => {
    const errorMessage = error.message;
    console.error(errorMessage);
  });

export const signIn = (auth, email, password) =>
  signInWithEmailAndPassword(auth, email, password).catch((error) => {
    const errorMessage = error.message;
    console.error(errorMessage);
  });

export const googleSignIn = (auth, provider) =>
  signInWithPopup(auth, provider).catch((error) => {
    const errorMessage = error.message;
    console.error(errorMessage);
  });
