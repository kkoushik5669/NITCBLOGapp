// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c9117.firebaseapp.com",
  projectId: "mern-blog-c9117",
  storageBucket: "mern-blog-c9117.firebasestorage.app",
  messagingSenderId: "300336543686",
  appId: "1:300336543686:web:f6d650746d8c33a6a8a4c7"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app;
