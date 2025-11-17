// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2Rb6ENTAQjk5Twu0RQc01NF9WgTsSf7Y",
  authDomain: "coffee-shop-da131.firebaseapp.com",
  projectId: "coffee-shop-da131",
  storageBucket: "coffee-shop-da131.firebasestorage.app",
  messagingSenderId: "220620020810",
  appId: "1:220620020810:web:aed0658cbb9e32a7575ab3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)