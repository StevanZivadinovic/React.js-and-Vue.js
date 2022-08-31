
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDz6rdZDi1awjV8hKMYwndskK08B8xqnNk",
  authDomain: "e-commerce-shop-c39ae.firebaseapp.com",
  projectId: "e-commerce-shop-c39ae",
  storageBucket: "e-commerce-shop-c39ae.appspot.com",
  messagingSenderId: "669754800957",
  appId: "1:669754800957:web:08fdc566406dfdad9f6354",
  measurementId: "G-PH7ZVE8GGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth}
