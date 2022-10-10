// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUnKbW5NNXrnhZH6HulXIYlWUgboh9RZ4",
    authDomain: "twitter-clone-1afbe.firebaseapp.com",
    projectId: "twitter-clone-1afbe",
    storageBucket: "twitter-clone-1afbe.appspot.com",
    messagingSenderId: "852261362166",
    appId: "1:852261362166:web:1eba24001889b767184fd7",
    measurementId: "G-7NGVMQVZHD"
  };

  // Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };