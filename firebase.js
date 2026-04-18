// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, query, where, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAgCbrgzvR0BH_rKFys2LiGuf5ZlLdkB-g",
  authDomain: "findmyprofessor-cb1d5.firebaseapp.com",
  projectId: "findmyprofessor-cb1d5",
  storageBucket: "findmyprofessor-cb1d5.firebasestorage.app",
  messagingSenderId: "471101293453",
  appId: "1:471101293453:web:425212c47e581fef2873c4",
  measurementId: "G-YXSM1XK7CX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Export the database and the necessary Firestore functions. As well as delete tool
export { db, collection, getDocs, query, where, addDoc, serverTimestamp, deleteDoc, doc };
