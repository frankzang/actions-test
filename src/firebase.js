import firebase from "firebase";

const appConfig = process.env.REACT_APP_FIREBASE_CONFIG;

console.log(appConfig);

firebase.initializeApp(appConfig);

export const db = firebase.firestore();
