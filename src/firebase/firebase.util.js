import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDwCUz5njmNbl5VN4SynyJEEByt47f7rRQ",
    authDomain: "wishkart-c51b5.firebaseapp.com",
    databaseURL: "https://wishkart-c51b5.firebaseio.com",
    projectId: "wishkart-c51b5",
    storageBucket: "wishkart-c51b5.appspot.com",
    messagingSenderId: "493286198941",
    appId: "1:493286198941:web:6168287728c9d3439b4e74",
    measurementId: "G-BH57SSBX5B"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user');

        }
    }
    return userRef;

};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

