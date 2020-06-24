import firebase from "firebase";

const appConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);

firebase.initializeApp(appConfig);

export const db = firebase.firestore();

export const init = () => {
  db.collection("users")
    .doc("test")
    .get()
    .then((res) => {
      console.log(res.data());
    })
    .catch((err) => console.log({ err }));
};
