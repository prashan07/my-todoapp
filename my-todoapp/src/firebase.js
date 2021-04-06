import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDuJNyW06fUFBoluYmWbJkmeoPHZoLVU74",
    authDomain: "my-todoapp-3880f.firebaseapp.com",
    projectId: "my-todoapp-3880f",
    storageBucket: "my-todoapp-3880f.appspot.com",
    messagingSenderId: "671811729501",
    appId: "1:671811729501:web:b89c25e068ee1c2d43b5b4",
    measurementId: "G-ME1KDK8TB6"
});

const db = firebaseApp.firestore();

export default db;

