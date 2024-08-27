// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase authentication

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy9Uek2ZHjqMfcd_Uph8DnQbPWP_kwXj0",
  authDomain: "growth-universe7.firebaseapp.com",
  projectId: "growth-universe7",
  storageBucket: "growth-universe7.appspot.com",
  messagingSenderId: "489125380958",
  appId: "1:489125380958:web:495e4b2051a22f088505cf",
  measurementId: "G-KCSW9CG8E1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication

// Export the Firebase auth instance to use in other parts of your app
export { auth };
