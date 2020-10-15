import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDC9kRl8aLdISXT7nQ2yP4jXrmwR8fOn2E",
    authDomain: "pokemon-react-8b81b.firebaseapp.com",
    databaseURL: "https://pokemon-react-8b81b.firebaseio.com",
    projectId: "pokemon-react-8b81b",
    storageBucket: "pokemon-react-8b81b.appspot.com",
    messagingSenderId: "561233411666",
    appId: "1:561233411666:web:d6ea3ababcedb5d2f3698b"
};
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

export {auth, firebase, db, storage}
