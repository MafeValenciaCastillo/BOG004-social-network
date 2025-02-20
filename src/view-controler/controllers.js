import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from '../lib/firebase-utils.js';

export const singIn = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
};
export const singUp = (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
};

export const emailSingUp = (user) => sendEmailVerification(user);

export const singInGoogle = (provider) => {
  const auth = getAuth();
  return signInWithPopup(auth, provider);
};

export const singWithPopUp = (result) => GoogleAuthProvider.credentialFromResult(result);

export const errorSingUpWithPopUp = (error) => GoogleAuthProvider.credentialFromError(error);

export const signOutUser = () => {
  const auth = getAuth();
  return signOut(auth);
};
