// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6HUriigIIGvY_hmJOuQsqBICoVeAnLMM",
  authDomain: "laptop-house.firebaseapp.com",
  projectId: "laptop-house",
  storageBucket: "laptop-house.appspot.com",
  messagingSenderId: "159179802036",
  appId: "1:159179802036:web:be678e3a68760a25a55ee1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;