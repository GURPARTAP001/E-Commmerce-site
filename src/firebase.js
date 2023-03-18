import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCm6aX6vlaJqN_tvm0L0eznN7JjiQwIRTc",
    authDomain: "e-commerce-site-f664b.firebaseapp.com",
    projectId: "e-commerce-site-f664b",
    storageBucket: "e-commerce-site-f664b.appspot.com",
    messagingSenderId: "405402564965",
    appId: "1:405402564965:web:e38cb98707a3417f86498c",
    measurementId: "G-K7F773NL9J"
  };

  //we are initializing the firebase app
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  //initialiszing the data base
  const db=firebaseApp.firestore()//firestore is the run time data base in the firebase

  const auth=firebase.auth();//it is the variable that help in all the sign-in part 

  export {db,auth}//this help us to export the db and the auth outside this file
