import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZjRFh62STfdo4XN5uic9zz0Euly3FDmE",
  authDomain: "appchamados-83245.firebaseapp.com",
  projectId: "appchamados-83245",
  storageBucket: "appchamados-83245.appspot.com",
  messagingSenderId: "19239615179",
  appId: "1:19239615179:web:061f52e1aa45c24f3ef94e",
  measurementId: "G-ZWN4TJR8EY",
};

const firebaseapp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);

export { db, auth };