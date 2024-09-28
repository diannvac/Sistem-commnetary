
import { initializeApp } from "firebase/app";
import { getStorage , ref, uploadBytes} from 'firebase/storage';
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBnY33b_TVXWCEHO2EL1KwlSqq1dnWrpTA",
  authDomain: "maestria-352e2.firebaseapp.com",
  projectId: "maestria-352e2",
  storageBucket: "maestria-352e2.appspot.com",
  messagingSenderId: "446803745806",
  appId: "1:446803745806:web:7a87bfa63f3b4d9317705f",
  measurementId: "G-1ZHB6LSRXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const storage = getStorage(app)



export const db = getFirestore(app);






