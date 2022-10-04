// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhWltPeMzPJwyh_HS3n5-IufgQJ6WWwkg",
  authDomain: "titt-480c1.firebaseapp.com",
  projectId: "titt-480c1",
  storageBucket: "titt-480c1.appspot.com",
  messagingSenderId: "663854547384",
  appId: "1:663854547384:web:65bd00bc33e08357e00f4d",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
