import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "app.firebaseapp.com",
  databaseURL: "https://app.firebaseio.com",
  projectId: "xxxxxx2",
  storageBucket: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  appId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  measurementId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
