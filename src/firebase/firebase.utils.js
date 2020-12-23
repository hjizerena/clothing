import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA2VitJISvCKXFcG5maTXnE-0SMB3oWSy0",
  authDomain: "clothing-8c968.firebaseapp.com",
  projectId: "clothing-8c968",
  storageBucket: "clothing-8c968.appspot.com",
  messagingSenderId: "1091450495033",
  appId: "1:1091450495033:web:cbb7f8d1a38e1845e82de8"
};

firebase.initializeApp(config);

export const auth  = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;