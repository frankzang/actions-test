import firebase from "firebase";

const appConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);

console.log(appConfig);

firebase.initializeApp(appConfig);

export const db = firebase.firestore();
