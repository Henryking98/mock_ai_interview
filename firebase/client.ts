// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAMqZwEUGYH3BEogpij20wHSEwyZDFZfOc',
    authDomain: 'prepwise-ai-94228.firebaseapp.com',
    projectId: 'prepwise-ai-94228',
    storageBucket: 'prepwise-ai-94228.firebasestorage.app',
    messagingSenderId: '90684263235',
    appId: '1:90684263235:web:9233967c468156948d3df6',
    measurementId: 'G-JT1X44BH0T',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
