import firebase from "firebase";

const appConfig = process.env.REACT_APP_FIREBASE_CONFIG;

firebase.initializeApp(appConfig);

firebase
  .firestore()
  .collection("users")
  .doc("test")
  .get()
  .then((res) => {
    console.log(res.data());
  })
  .catch((err) => console.log({ err }));
