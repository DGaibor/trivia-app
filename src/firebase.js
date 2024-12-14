import 'dotenv/config'
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {

    // eslint-disable-next-line no-undef
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // eslint-disable-next-line no-undef
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // eslint-disable-next-line no-undef
    projectId: process.env.REACT_APP_FIREABSE_PROJECT_ID,
    // eslint-disable-next-line no-undef
    storageBucket: process.env.REACT_APP_FIREABSE_STORAGE_BUCKET,
    // eslint-disable-next-line no-undef
    messagingSenderId: process.env.REACT_APP_FIREABSE_MESSAGING_SENDER_ID,
    // eslint-disable-next-line no-undef
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
