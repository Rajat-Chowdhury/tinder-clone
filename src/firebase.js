import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBEOL_x7T1krtbMhGMEOt6iqwVO5CI20e4",
    authDomain: "tinder-clone-74a4d.firebaseapp.com",
    databaseURL: "https://tinder-clone-74a4d.firebaseio.com",
    projectId: "tinder-clone-74a4d",
    storageBucket: "tinder-clone-74a4d.appspot.com",
    messagingSenderId: "1010141994532",
    appId: "1:1010141994532:web:5d210eb83faccce9ea82b1",
    measurementId: "G-X1Y6RCF727"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;