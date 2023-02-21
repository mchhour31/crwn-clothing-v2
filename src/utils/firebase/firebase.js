import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCfQybZPQ_9-SrGds9-i5y7H_etZv6ydnc",
    authDomain: "crwn-clothing-db-9ae5e.firebaseapp.com",
    projectId: "crwn-clothing-db-9ae5e",
    storageBucket: "crwn-clothing-db-9ae5e.appspot.com",
    messagingSenderId: "135707360046",
    appId: "1:135707360046:web:f5cab816e6de254fd3d8bf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);