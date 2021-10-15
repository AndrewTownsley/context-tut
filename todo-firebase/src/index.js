import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as firebase from "firebase";


firebase.initializeApp({
  apiKey: "AIzaSyDf2YhWftdDE620_OY-ZNi5Gw8wxp4fB_M",
  authDomain: "todo-app-32db0.firebaseapp.com",
  projectId: "todo-app-32db0",
  storageBucket: "todo-app-32db0.appspot.com",
  messagingSenderId: "742916085653",
  appId: "1:742916085653:web:29b3048fbd43081d8d489c"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);