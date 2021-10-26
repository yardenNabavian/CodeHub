import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

// initializeApp
const firebaseConfig = {
  apiKey: "AIzaSyDdU9-kabjwWAaLIaksxfjVWcRmyHQthrg",
  authDomain: "ytcodehub.firebaseapp.com",
  projectId: "ytcodehub",
  storageBucket: "ytcodehub.appspot.com",
  messagingSenderId: "1008861353046",
  appId: "1:1008861353046:web:e7de4c9c73ca74f30517f7",
};

const app = initializeApp(firebaseConfig);

// auth
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

// database
const db = getFirestore(app);

export const getVideos = async (userID) => {
  const vidCol = collection(db, userID);
  const videoSnapshot = await getDocs(vidCol);
  const videoList = videoSnapshot.docs.map((doc) => doc.data());
  return videoList;
};

export const addVideo = async (userID, videoLink) => {
  await setDoc(doc(db, userID, videoLink), {
    link: videoLink,
  });
};

export const deleteVideo = async (userID, video) => {
  await deleteDoc(doc(db, userID, video));
};
