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

const
  auth = firebase.auth(),
  firestore = firebase.firestore(),
  provider = new firebase.auth.GoogleAuthProvider();

// OAuth stuff

provider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () => auth.signInWithPopup(provider);

async function createUserDocument(userAuth, additionalData) {
  if (!userAuth) return;

  const
    userRef = firestore.doc(`users/${userAuth.uid}`),
    snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth,
      createdOn = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdOn,
        ...additionalData
      })
    } catch (err) {
      console.error(err)
    }
  }
  return userRef;
}



export { auth, firestore, signInWithGoogle, createUserDocument }
