import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyAL8ftRiWr9c9iij3zHzHbeVAWxFs1aflA",
    authDomain: "fir-login-template-127a4.firebaseapp.com",
    projectId: "fir-login-template-127a4",
    storageBucket: "fir-login-template-127a4.appspot.com",
    messagingSenderId: "625487502450",
    appId: "1:625487502450:web:a55c62b9f30cc966d7f6eb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const gprovider = new firebase.auth.GoogleAuthProvider();
  export {auth , gprovider}
