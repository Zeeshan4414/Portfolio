// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLZ2vdzJUpq4zIGcgeuzbP-yU0rP3hTOc",
  authDomain: "porfolio-4414.firebaseapp.com",
  projectId: "porfolio-4414",
  storageBucket: "porfolio-4414.appspot.com",
  messagingSenderId: "472245433277",
  appId: "1:472245433277:web:11e0b4802bfb1b64a2d8d4",
  measurementId: "G-4PVM7V0CE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}

