import fb from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = fb.initializeApp({
    apiKey: "AIzaSyAF_9VzV4-1SDw1yGul_FL5PPCx_q2W8ws",
    authDomain: "inst-f68e9.firebaseapp.com",
    projectId: "inst-f68e9",
    storageBucket: "inst-f68e9.appspot.com",
    messagingSenderId: "825222020103",
    appId: "1:825222020103:web:0ed6bc25f593e55793bea2",
    measurementId: "G-84LJN9QL4K"
});

const db = firebaseApp.firestore();
const auth = fb.auth();
const storage = fb.storage();

export { db, auth, storage, fb };
