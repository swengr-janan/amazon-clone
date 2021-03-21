import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8zqWkhf4OosO7XtGptDJcJ8Le-GRX4WU",
    authDomain: "challenge-b428e.firebaseapp.com",
    projectId: "challenge-b428e",
    storageBucket: "challenge-b428e.appspot.com",
    messagingSenderId: "823347823210",
    appId: "1:823347823210:web:dadf83164d9779fa210013",
    measurementId: "G-79M2DNVTRY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth};