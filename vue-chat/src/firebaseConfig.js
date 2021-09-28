import firebase from 'firebase/compat/app'//preko vezije 9.0.0 ovako unosis ova dva prva reda, ostalo mislim da je isto,
//odnosno, kad unosis firebase funkcije(firestore, auth itd. kao i sam firebase)
import 'firebase/compat/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBPc8Ni1IWnJDQCwbcLIv0FuEdMRDGkyMg",
    authDomain: "vue-chat-ninja-4af6f.firebaseapp.com",
    projectId: "vue-chat-ninja-4af6f",
    storageBucket: "vue-chat-ninja-4af6f.appspot.com",
    messagingSenderId: "278632206546",
    appId: "1:278632206546:web:f33e9f560fd3049f781d0b",
    measurementId: "G-CLQMFBZFXB"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  console.log(firebase)
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export {timestamp};
  export  const db = app.firestore()