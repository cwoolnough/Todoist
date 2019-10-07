import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyA39ezGf-TlJhglrPb0vY79j2jSl7npviA",
  authDomain: "todoist-24297.firebaseapp.com",
  databaseURL: "https://todoist-24297.firebaseio.com",
  projectId: "todoist-24297",
  storageBucket: "todoist-24297.appspot.com",
  messagingSenderId: "943960935032",
  appId: "1:943960935032:web:4068f56507b5980c28fb8d"
});

export { firebaseConfig as firebase };
