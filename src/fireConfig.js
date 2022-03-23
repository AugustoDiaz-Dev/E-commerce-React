import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCXQAifJQ-Cp6Nc30cEg0TxboYs_xBlMoY",
    authDomain: "e-commerce-62f6e.firebaseapp.com",
    projectId: "e-commerce-62f6e",
    storageBucket: "e-commerce-62f6e.appspot.com",
    messagingSenderId: "776823833706",
    appId: "1:776823833706:web:05ea63ddd5e5ec22f1f613",
    measurementId: "G-YP06T63700"
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

export default fireDB;