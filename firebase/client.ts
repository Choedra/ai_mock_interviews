import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQGg5ScnyTTnp6-HjkXi9qw3B5WZ4ftAM",
  authDomain: "prepwise-4b2f5.firebaseapp.com",
  projectId: "prepwise-4b2f5",
  storageBucket: "prepwise-4b2f5.firebasestorage.app",
  messagingSenderId: "415594670743",
  appId: "1:415594670743:web:0db6b32ecdcc90618017d2",
  measurementId: "G-JYMVKP9YPM"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);