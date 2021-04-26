import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK2iK2S1SdJ8g-JEyecU2TT0JPGdP9LHo",
  authDomain: "snapchat-clone-1388b.firebaseapp.com",
  projectId: "snapchat-clone-1388b",
  storageBucket: "snapchat-clone-1388b.appspot.com",
  messagingSenderId: "151157386865",
  appId: "1:151157386865:web:b76065aa5c486404f775d0",
  measurementId: "G-C6LXLGFGC8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// initiate the firebase-app with firebase function above

const db = firebaseApp.firestore();
// Initiate the database with firestore function

const auth = firebase.auth();
//  Initiate the authentication with firebase auth fnction.

const storage = firebase.storage();
// Initiate the storage with firebase storage..

const provider = new firebase.auth.GoogleAuthProvider();
// Initate a provider for the application. here initiated the Google authentication is the provider for the snapchat clone application.

export { auth, db, provider, storage };
