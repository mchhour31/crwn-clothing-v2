import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCfQybZPQ_9-SrGds9-i5y7H_etZv6ydnc",
    authDomain: "crwn-clothing-db-9ae5e.firebaseapp.com",
    projectId: "crwn-clothing-db-9ae5e",
    storageBucket: "crwn-clothing-db-9ae5e.appspot.com",
    messagingSenderId: "135707360046",
    appId: "1:135707360046:web:f5cab816e6de254fd3d8bf"
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

// sign in w/ google
googleProvider.setCustomParameters({
    prompt: 'select_account'
})
    
export const auth = getAuth();

export const signInWithGooglePopup = () => {
    return signInWithPopup(auth, googleProvider);
}

export const db = getFirestore();

// writing doc to db
export const createUserDocFromAuth = async (userAuth) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid); // doc reference, collection, unique identifier

    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, 
                email, 
                createdAt
            });
        } catch (err) {
            console.log(err);
        }
    }

    return userDocRef;
}

// sign up w/ email password 
export const signUpEmailPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

