import { initializeApp } from "firebaee/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  // FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
} from "firebase/firestore";

// i used firebase for the login and signup authorization
const firebaseConfig = {
  apiKey: "AIzaSyC75hX2fy6ehYg98E9N5Awo6JcmcKdb0wo",
  authDomain: "petzzi-ea94b.firebaseapp.com",
  projectId: "petzzi-ea94b",
  storageBucket: "petzzi-ea94b.appspot.com",
  messagingSenderId: "1023804877015",
  appId: "1:1023804877015:web:5abefbb81991f1aebf6892",
  measurementId: "G-25CZTZG6JP",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
// const facebookprovider = new  FacebookAuthProvider(),

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, facebookprovider);
// const analytics = getAnalytics(app);

export const db = getFirestore();

export const createUserDocumentFromAutj = async (userAuth) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createUserWithEmailAndPassword = async (email, passowrd) => {
  if (!email || !passowrd) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
