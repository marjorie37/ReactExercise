import firebase from "firebase";
// Initialize Firebase
const config = {
  apiKey: "AIzaSyCyf0uuPmWwcdNYEUZsIFZSzc3vE8JCQ2M",
  authDomain: "projetx-60526.firebaseapp.com",
  databaseURL: "https://projetx-60526.firebaseio.com",
  projectId: "projetx-60526",
  storageBucket: "projetx-60526.appspot.com",
  messagingSenderId: "647834995219"
};

firebase.initializeApp(config);
export default firebase;
