// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAWokgDa73p47UI33FVS1o9tlGibLwb_bo",
  authDomain: "maryportfoliotestimonials.firebaseapp.com",
  projectId: "maryportfoliotestimonials",
  storageBucket: "maryportfoliotestimonials.firebasestorage.app",
  messagingSenderId: "513643677292",
  appId: "1:513643677292:web:dd375675330ac28775fa49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
