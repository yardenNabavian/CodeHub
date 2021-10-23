import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdU9-kabjwWAaLIaksxfjVWcRmyHQthrg",
  authDomain: "ytcodehub.firebaseapp.com",
  projectId: "ytcodehub",
  storageBucket: "ytcodehub.appspot.com",
  messagingSenderId: "1008861353046",
  appId: "1:1008861353046:web:e7de4c9c73ca74f30517f7",
};

export const app = initializeApp(firebaseConfig);
