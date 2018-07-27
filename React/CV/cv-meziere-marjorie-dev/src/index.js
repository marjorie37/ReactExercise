import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import 'firebase/firestore'
const admin = require('firebase-admin');
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore")

let config = {
    apiKey: "AIzaSyA4IHzds7lEDgCZzT606CkiLcJ5zFCJBE4",
    authDomain: "database-45f25.firebaseapp.com",
    databaseURL: "https://database-45f25.firebaseio.com",
    projectId: "database-45f25",
    storageBucket: "database-45f25.appspot.com",
    messagingSenderId: "1050871933144"

};

firestore.initializeApp(config)
// Initialize Cloud Firestore through Firebase
let firestore = firebase.firestore();

var docRef = firestore.doc("col/resume")

docRef.get().then((doc) => {
    console.log(doc);
})


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
