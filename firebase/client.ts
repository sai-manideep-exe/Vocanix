// Import the functions you need from the SDKs you need


import { initializeApp,getApp, getApps} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMIXtdqh53pCdt_vT7L00Ppj3FdtKcHnE",
    authDomain: "vocanix.firebaseapp.com",
    projectId: "vocanix",
    storageBucket: "vocanix.firebasestorage.app",
    messagingSenderId: "885095430413",
    appId: "1:885095430413:web:39872be519d6f985579844",
    measurementId: "G-P31ZRYK3LZ"
};

// Initialize Firebase
const app = getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);