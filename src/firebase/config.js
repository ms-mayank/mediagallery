import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getStorage } from "firebase/storage";
// import firebase from 'firebase/compact/app'
// import 'firebase/compat/storage'
// import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWpu79eLc-qRgx1QMlJA81254h-4caJ8o",
  authDomain: "mediagallery-19bd6.firebaseapp.com",
  projectId: "mediagallery-19bd6",
  storageBucket: "mediagallery-19bd6.appspot.com",
  messagingSenderId: "440566078762",
  appId: "1:440566078762:web:5bfe7cdb1de97590b11253"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = firebase.auth(); 
const provider = new firebase.auth.GoogleAuthProvider(); 

export{projectStorage,projectFirestore, timestamp, app, auth, provider}