// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDomnf_xuyN_cUXSPuCniJoApuuUVpPxvc",
  authDomain: "fir-auth-3-d71d4.firebaseapp.com",
  projectId: "fir-auth-3-d71d4",
  storageBucket: "fir-auth-3-d71d4.firebasestorage.app",
  messagingSenderId: "437489974018",
  appId: "1:437489974018:web:277172cabca0757b94e01b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
