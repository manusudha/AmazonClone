// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore';

     
const firebaseConfig = {
  apiKey: "AIzaSyAMW_8Axyz84Dl3WbkSVV81CusxA18iFi8",
  authDomain: "clone-404d2.firebaseapp.com",
  projectId: "clone-404d2",
  storageBucket: "clone-404d2.appspot.com",
  messagingSenderId: "437712763198",
  appId: "1:437712763198:web:efd65d6e67254f5788546f",
  measurementId: "G-KKB46QX9SF"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig); 
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export{db,auth };