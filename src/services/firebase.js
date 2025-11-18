// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY71Q-5nP_fWuii632-uuwNKUSUVTxdF0",
  authDomain: "test-chat-app-56f31.firebaseapp.com",
  projectId: "test-chat-app-56f31",
  storageBucket: "test-chat-app-56f31.firebasestorage.app",
  messagingSenderId: "1006841220930",
  appId: "1:1006841220930:web:a14ab8a3790e4669b842db",
  measurementId: "G-CX9200LTWE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
