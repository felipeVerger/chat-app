// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNMKUZiM2G2RxaO8zw28IPkEC1cTjkW7M",
  authDomain: "chat-c1a5d.firebaseapp.com",
  projectId: "chat-c1a5d",
  storageBucket: "chat-c1a5d.appspot.com",
  messagingSenderId: "950464950037",
  appId: "1:950464950037:web:cd3bac779e7467a04b031c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();