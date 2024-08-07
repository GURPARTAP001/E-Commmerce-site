import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCm6aX6vlaJqN_tvm0L0eznN7JjiQwIRTc",
  authDomain: "e-commerce-site-f664b.firebaseapp.com",
  projectId: "e-commerce-site-f664b",
  storageBucket: "e-commerce-site-f664b.appspot.com",
  messagingSenderId: "405402564965",
  appId: "1:405402564965:web:e38cb98707a3417f86498c",
  measurementId: "G-K7F773NL9J"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

