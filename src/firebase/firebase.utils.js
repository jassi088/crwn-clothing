import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAusfQdtKOVS7t_kIurGbylCaxgGVkvveo",
    authDomain: "crwn-clothing-f31d1.firebaseapp.com",
    projectId: "crwn-clothing-f31d1",
    storageBucket: "crwn-clothing-f31d1.appspot.com",
    messagingSenderId: "889851929619",
    appId: "1:889851929619:web:d1d77d025174274091cbe6",
    measurementId: "G-L38DM1REQR"
};


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;