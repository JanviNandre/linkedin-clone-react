import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA9jcJeDO-Qe3sBEWCi4Z7Z04P9Lg2Mhf4",
    authDomain: "linkedin-clone-jn.firebaseapp.com",
    projectId: "linkedin-clone-jn",
    storageBucket: "linkedin-clone-jn.appspot.com",
    messagingSenderId: "193523641039",
    appId: "1:193523641039:web:51b36a966543c108b7a5ba"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };