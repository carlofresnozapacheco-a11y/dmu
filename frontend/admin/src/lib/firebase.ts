
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: "dormamu-d7e4b",
  appId: "1:851829022446:web:38569d70a0107386af9dff",
  storageBucket: "dormamu-d7e4b.appspot.com",
  apiKey: "AIzaSyCzS67rERljlfS-hVRhehV8BCZ3C8MhLWA",
  authDomain: "dormamu-d7e4b.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "851829022446",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
