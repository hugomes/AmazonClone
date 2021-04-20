import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAm2xg6fpRtVnnjtFo3vS55zmX9DaQMhAI",
    authDomain: "challenge-2828d.firebaseapp.com",
    projectId: "challenge-2828d",
    storageBucket: "challenge-2828d.appspot.com",
    messagingSenderId: "352824582455",
    appId: "1:352824582455:web:1105d9b9283f8d9662fab2",
    measurementId: "G-FSTHBYTTEE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export{db, auth};