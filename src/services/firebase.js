import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAIfaiE4yDghgmlYeVojfekDdAsaD3_S5U",
    authDomain: "atsiskaitomas.firebaseapp.com",
    projectId: "atsiskaitomas",
    databaseURL: "https://atsiskaitomas-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "atsiskaitomas.appspot.com",
    messagingSenderId: "210744371055",
    appId: "1:210744371055:web:13fceeb11fe6243dc62a9a",
    measurementId: "G-TB9FK81NDY"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { app, database, auth };
