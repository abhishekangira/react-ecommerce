import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6wCfeQFNzuSEunHPTLQRwhctMqssAbP8",
  authDomain: "angira-react-ecommerce.firebaseapp.com",
  projectId: "angira-react-ecommerce",
  storageBucket: "angira-react-ecommerce.appspot.com",
  messagingSenderId: "159084558898",
  appId: "1:159084558898:web:7d5b464819e1e978e49a2b",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
