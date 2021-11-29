import firebase from 'firebase/compat/app'
import  'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBeX5fxQq8iG9HHhSmZ9-28gCMlD-DpWUI",
  authDomain: "pravoslavne-ikone-new.firebaseapp.com",
  projectId: "pravoslavne-ikone-new",
  storageBucket: "pravoslavne-ikone-new.appspot.com",
  messagingSenderId: "140747046101",
  appId: "1:140747046101:web:b0b4977eb268e62f6a765c",
  measurementId: "G-HZJSXBXBDZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);




  const projectFirestore =firebase.firestore();
  const projectAuth = firebase.auth()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export  {projectFirestore, projectAuth, timestamp}