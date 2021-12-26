import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBJC-e-22WeZH8oMoouTHvbJxWqRF1e8Hk",
    authDomain: "clone-5aca1.firebaseapp.com",
    projectId: "clone-5aca1",
    storageBucket: "clone-5aca1.appspot.com",
    messagingSenderId: "580059553719",
    appId: "1:580059553719:web:b91d63ebe6633c7c6bd232"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};