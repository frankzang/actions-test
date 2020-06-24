import firebase from "firebase";

const appConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);

firebase.initializeApp(appConfig);

export const db = firebase.firestore();
