import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARDJQfK104rJPRfBJtp73K73BQbDVdK14",
  authDomain: "udemy-firebase-vue-sites.firebaseapp.com",
  projectId: "udemy-firebase-vue-sites",
  storageBucket: "udemy-firebase-vue-sites.appspot.com",
  messagingSenderId: "110486369363",
  appId: "1:110486369363:web:8b8f936cb51e8d8a9f02a6",
};

// Init firebase

firebase.initializeApp(firebaseConfig);

// Init Firestore

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
