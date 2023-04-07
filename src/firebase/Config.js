// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQezxxIKXv-jPjH_TYTfhvDmtRluV61tc",
  authDomain: "react-nordic.firebaseapp.com",
  projectId: "react-nordic",
  storageBucket: "react-nordic.appspot.com",
  messagingSenderId: "534218310652",
  appId: "1:534218310652:web:8e8d158f151d0efce6a879"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)