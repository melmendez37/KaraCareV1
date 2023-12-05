// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPGvEBRbRkY56Wf1gMUMU9jST1-wYhzhg",
  authDomain: "karacare-2164e.firebaseapp.com",
  projectId: "karacare-2164e",
  storageBucket: "karacare-2164e.appspot.com",
  messagingSenderId: "116333076149",
  appId: "1:116333076149:web:ae802a005817cbb73de8fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)
