import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCFHF_91iX7qhdAnAgwY3wJ-zWdhlFHZXM",
  authDomain: "codeforyou-firebase.firebaseapp.com",
  projectId: "codeforyou-firebase",
  storageBucket: "codeforyou-firebase.appspot.com",
  messagingSenderId: "958978479318",
  appId: "1:958978479318:web:0134fb2e3ba344e8d1e577"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore(app);

export { auth, db };