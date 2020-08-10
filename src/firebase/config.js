import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDjWHK8BfiYkCJ6_DFC4kQYxuCiJUhuez8",
    authDomain: "challengewozzii.firebaseapp.com",
    databaseURL: "https://challengewozzii.firebaseio.com",
    projectId: "challengewozzii",
    storageBucket: "challengewozzii.appspot.com",
    messagingSenderId: "736116170297",
    appId: "1:736116170297:web:e076181fae9e6be88b77e8",
    measurementId: "G-72NJ93P8E8"
};
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();