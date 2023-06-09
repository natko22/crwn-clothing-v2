// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEyP2bu7OJ5vMfDS7LsrfXTvsP3qLROb4",
  authDomain: "crwn-clothing-90d1c.firebaseapp.com",
  projectId: "crwn-clothing-90d1c",
  storageBucket: "crwn-clothing-90d1c.appspot.com",
  messagingSenderId: "332632989511",
  appId: "1:332632989511:web:29d7be5b3ef342a9c77662",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
