import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFireStore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIJCThBKxN1K6QcZ_Ty0KXNuorcvhVxoM",
  authDomain: "medsentials.firebaseapp.com",
  projectId: "medsentials",
  storageBucket: "medsentials.appspot.com",
  messagingSenderId: "33310156308",
  appId: "1:33310156308:web:15780969efb86b990be901",
  measurementId: "G-T2BWEFH32F",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFireStore(app);
