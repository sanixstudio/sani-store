// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  firebaseApiKey,
  firebaseAppId,
  firebaseAuthDomain,
  firebaseMessagingSenderId,
  firebaseProjectId,
  firebaseStorageBucket,
} from "../constants";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: firebaseAuthDomain,
  projectId: firebaseProjectId,
  storageBucket: firebaseStorageBucket,
  messagingSenderId: firebaseMessagingSenderId,
  appId: firebaseAppId,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
