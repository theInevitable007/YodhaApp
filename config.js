import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyDxOM9KXvpsVzpb-SsrrcMKr42aPSGaS6M",
  authDomain: "yodha-323ec.firebaseapp.com",
  projectId: "yodha-323ec",
  storageBucket: "yodha-323ec.appspot.com",
  messagingSenderId: "158094499777",
  appId: "1:158094499777:web:8b5bc8cf80f06e67b51940"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();