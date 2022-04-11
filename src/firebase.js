import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'pathology-lab-dde45.firebaseapp.com',
  projectId: 'pathology-lab-dde45',
  storageBucket: 'pathology-lab-dde45.appspot.com',
  messagingSenderId: '784242335292',
  appId: '1:784242335292:web:a896652b80e65c01ca6d39',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

