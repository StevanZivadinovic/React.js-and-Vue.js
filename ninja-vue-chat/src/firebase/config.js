import firebase from 'firebase/compat/app'
import firestore from 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC7KkDM1FNSig9Er00nyVY2Ks-UUgZZRx8",
    authDomain: "ninja-vue-chat-cde44.firebaseapp.com",
    projectId: "ninja-vue-chat-cde44",
    storageBucket: "ninja-vue-chat-cde44.appspot.com",
    messagingSenderId: "1059699630335",
    appId: "1:1059699630335:web:7e5699bad6fd0fbf582cca"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const projectFirestore =firebaseApp.firestore() 
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export  {projectFirestore, timestamp}