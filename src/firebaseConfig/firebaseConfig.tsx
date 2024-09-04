import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAT1n6IP2fw6-t5jLH6whe8tlBv_7DJrmQ",
  authDomain: "eloni-bd30c.firebaseapp.com",
  projectId: "eloni-bd30c",
  storageBucket: "eloni-bd30c.appspot.com",
  messagingSenderId: "777137816114",
  appId: "1:777137816114:web:f670f2a7a8a33903ac322b",
  measurementId: "G-7ZYG2B86TZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);