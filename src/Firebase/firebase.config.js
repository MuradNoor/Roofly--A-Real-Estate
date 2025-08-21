// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4rW7b4ers7pucz2creSpxZYdRzZETock",
  authDomain: "roofly-a-real-estate.firebaseapp.com",
  projectId: "roofly-a-real-estate",
  storageBucket: "roofly-a-real-estate.firebasestorage.app",
  messagingSenderId: "1000762170135",
  appId: "1:1000762170135:web:8a51052e9e14d2cfd07552"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;