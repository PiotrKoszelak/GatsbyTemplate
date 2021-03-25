import firebase from 'firebase/app';
import firebaseConfig from './firebase_config';

let firebaseInstance;
const getFirebase = () => {
  if (firebaseInstance) {
    return firebaseInstance;
  }

  firebase.initializeApp(firebaseConfig);
  firebaseInstance = firebase;

  return firebase;
};

export default getFirebase;
