// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "openai-7b84f.firebaseapp.com",
  projectId: "openai-7b84f",
  storageBucket: "openai-7b84f.appspot.com",
  messagingSenderId: "901994800077",
  appId: "1:901994800077:web:dc8eed76d054237c909a84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
