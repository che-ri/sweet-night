import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBkLTf_LvV-g9_1hh7dcIZzZS6TvPEUO0Y",
  authDomain: "sweet-night-6e2c6.firebaseapp.com",
  projectId: "sweet-night-6e2c6",
  storageBucket: "sweet-night-6e2c6.appspot.com",
  messagingSenderId: "146717838229",
  appId: "1:146717838229:web:823c23b627432811fc449c",
  measurementId: "G-P6H7LRC48W",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
