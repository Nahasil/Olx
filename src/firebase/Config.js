import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAlS_j9oXfFvSLJvP8QGTa4PnVO31XetAM",
    authDomain: "olx-clone-e5e5b.firebaseapp.com",
    projectId: "olx-clone-e5e5b",
    storageBucket: "olx-clone-e5e5b.appspot.com",
    messagingSenderId: "882512678380",
    appId: "1:882512678380:web:7182ec6d38e8c8845c04c9",
    measurementId: "G-L2JB2FH9Z1"
  };


  export default firebase.initializeApp(firebaseConfig)
