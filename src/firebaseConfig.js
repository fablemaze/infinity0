// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJ8VSK3ixb6StosPZ0UlQo1HyxFO_Excc",
    authDomain: "infinity-player2.firebaseapp.com",
    projectId: "infinity-player2",
    storageBucket: "infinity-player2.appspot.com",
    messagingSenderId: "244059113180",
    appId: "1:244059113180:web:47e1350cf47247a1351619",
    measurementId: "G-T7679QP9Y2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);

export { app, database, storage };
