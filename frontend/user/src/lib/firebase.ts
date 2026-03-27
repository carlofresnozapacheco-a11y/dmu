
import { initializeApp, type FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// IMPORTANT: Replace the placeholder values below with your app's
// actual Firebase project configuration. For more information, see:
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig: FirebaseOptions = {
  projectId: "dormamu-d7e4b",
  appId: "1:883700846219:web:5e855f3beb04345c0dce8e",
  storageBucket: "dormamu-d7e4b.appspot.com",
  apiKey: "AIzaSyCU2_08IuJPbCOk9BFD_gIuZeEDRZeG2RA",
  authDomain: "dormamu-d7e4b.firebaseapp.com",
  messagingSenderId: "883700846219",
  databaseURL: "https://dormamu-d7e4b-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const database = getDatabase(app);
const auth = getAuth(app);

export { firestore, database, auth };
