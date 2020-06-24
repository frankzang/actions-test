import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { db } from "./firebase";

const appConfig = process.env.REACT_APP_FIREBASE_CONFIG;

console.log(appConfig);

function App() {
  useEffect(() => {
    db.collection("users")
      .doc("test")
      .get()
      .then((res) => {
        console.log(res.data());
      })
      .catch((err) => console.log({ err }));
  }, []);

  const appConfig = process.env.REACT_APP_FIREBASE_CONFIG;

  console.log(appConfig);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Isto está na branch dev....</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
