// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1AM9MQyj3yMvVgOzp25qduPWRGpnyKMY",
  authDomain: "react-netflix-project-6f53e.firebaseapp.com",
  projectId: "react-netflix-project-6f53e",
  storageBucket: "react-netflix-project-6f53e.appspot.com",
  messagingSenderId: "526101054484",
  appId: "1:526101054484:web:6366c40c5383fb4247d301",
  measurementId: "G-W706PHHVW7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
