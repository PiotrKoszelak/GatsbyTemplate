import firebaseConfig from "./firebase_config";

let firebaseInstance;
export const getFirebase = firebase => {
  if (firebaseInstance) {
    return firebaseInstance
  }

  firebase.initializeApp(firebaseConfig)
  firebaseInstance = firebase

  return firebase
}

export default getFirebase