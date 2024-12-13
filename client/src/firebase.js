// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "housey-67635.firebaseapp.com",
  projectId: "housey-67635",
  storageBucket: "housey-67635.firebasestorage.app",
  messagingSenderId: "253062056648",
  appId: "1:253062056648:web:cd85c643b2c68737be73fd"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);