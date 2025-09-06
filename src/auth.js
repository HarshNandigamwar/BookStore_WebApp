//importing from firebase.js
import { auth } from "./firebase";
//import from firebase
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

// Email signup
export const signUp = (email, pass) =>
  createUserWithEmailAndPassword(auth, email, pass);

// Email login
export const signIn = (email, pass) =>
  signInWithEmailAndPassword(auth, email, pass);

// Google login
export const googleLogin = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

// Phone login
export const setupRecaptcha = (id = "recaptcha-container") => {
  window.recaptchaVerifier = new RecaptchaVerifier(id, {}, auth);
};

export const phoneLogin = (phoneNumber) =>
  signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);

export const logout = () => signOut(auth);
