// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAMzwIklilEKbvhjdycbZxjo4HMSpVFk38",
  authDomain: "desibazar-96cec.firebaseapp.com",
  projectId: "desibazar-96cec",
  storageBucket: "desibazar-96cec.appspot.com",
  messagingSenderId: "247716798006",
  appId: "1:247716798006:web:c17d00c52cd93ea9708297"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB= getFirestore(app);
const auth= getAuth(app);
export {fireDB, auth}
