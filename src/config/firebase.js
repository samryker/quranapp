import firebase from 'firebase/app';
import 'firebase/auth';
//import Constants from 'expo-constants';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBc5JGmyjHi1dNUFe2qNEVoYD_jsDLGySs",
  authDomain: "kuoranapp.firebaseapp.com",
  projectId: "kuoranapp",
  storageBucket: "kuoranapp.appspot.com",
  messagingSenderId: "603021363231",
  appId: "1:603021363231:web:582eba1d6a7a33396dad2a",
  measurementId: "G-NWGDFB067C"
};

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;


/*
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBc5JGmyjHi1dNUFe2qNEVoYD_jsDLGySs",
  authDomain: "kuoranapp.firebaseapp.com",
  projectId: "kuoranapp",
  storageBucket: "kuoranapp.appspot.com",
  messagingSenderId: "603021363231",
  appId: "1:603021363231:web:582eba1d6a7a33396dad2a",
  measurementId: "G-NWGDFB067C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/