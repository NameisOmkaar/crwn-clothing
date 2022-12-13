import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKL9t5aRp0YagMtMFK2DOswjpTAwsGmUE",
  authDomain: "crwn-clothing-6c46d.firebaseapp.com",
  projectId: "crwn-clothing-6c46d",
  storageBucket: "crwn-clothing-6c46d.appspot.com",
  messagingSenderId: "143102942996",
  appId: "1:143102942996:web:5603518376f191c24d2c01",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>  signInWithPopup(auth,provider);