import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getDatabase, ref, set, get, push } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCxQTDG8d14Hjt9sglck4lrFWDkeG-LOC0",
  authDomain: "io-24-77f16.firebaseapp.com",
  projectId: "io-24-77f16",
  storageBucket: "io-24-77f16.appspot.com",
  messagingSenderId: "35544991302",
  appId: "1:35544991302:web:85543fd0bcb3dfec582c47",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const rtdb = getDatabase(app);
export { db, rtdb, collection, addDoc, ref, set, get, push, analytics };
