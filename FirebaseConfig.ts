import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIJCThBKxN1K6QcZ_Ty0KXNuorcvhVxoM",
  authDomain: "medsentials.firebaseapp.com",
  projectId: "medsentials",
  storageBucket: "medsentials.appspot.com",
  messagingSenderId: "33310156308",
  appId: "1:33310156308:web:15780969efb86b990be901",
  measurementId: "G-T2BWEFH32F",
};

const FIREBASE_APP = initializeApp(firebaseConfig);
initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_FIRESTORE = getFirestore(FIREBASE_APP);
