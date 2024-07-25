// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaEyLkJ15NDnXOGidhhyR78rQTcCn605M",
  authDomain: "react-notes-13ba1.firebaseapp.com",
  projectId: "react-notes-13ba1",
  storageBucket: "react-notes-13ba1.appspot.com",
  messagingSenderId: "474852842861",
  appId: "1:474852842861:web:d94b6d9b221ba504804e64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const notesCollection = collection(db, "notes")