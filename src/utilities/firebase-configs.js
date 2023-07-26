import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA1AM9MQyj3yMvVgOzp25qduPWRGpnyKMY",
  authDomain: "react-netflix-project-6f53e.firebaseapp.com",
  projectId: "react-netflix-project-6f53e",
  storageBucket: "react-netflix-project-6f53e.appspot.com",
  messagingSenderId: "526101054484",
  appId: "1:526101054484:web:6366c40c5383fb4247d301",
  measurementId: "G-W706PHHVW7",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
