// firebase config kwy setup

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// app's firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAVf4LuJUgqXrSQZTO1049m3FK6m-DzKko",
  authDomain: "upnote-15447.firebaseapp.com",
  projectId: "upnote-15447",
  storageBucket: "upnote-15447.appspot.com",
  messagingSenderId: "161702376028",
  appId: "1:161702376028:web:e66cae95f68d76950b6c99",
  measurementId: "G-YEK8KBBZDZ",
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};