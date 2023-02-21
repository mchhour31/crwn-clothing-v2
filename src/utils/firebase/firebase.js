import { initializeApp } from 'firebase/app';
import { getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

import {
    getFirestore,
    doc, // used to retrieve a document instance
    getDoc, // used to access data of documents
    setDoc // used to set data of document 
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
 
// google auth
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

// authentication
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (err) {
            console.log(err);
        }
    }

    return userDocRef;
}