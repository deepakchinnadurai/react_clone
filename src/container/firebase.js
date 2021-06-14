import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAA6rPLEUKuxNZ9VWIdiMdWWQMooypN1Ag",
  authDomain: "tesla-clone-554a7.firebaseapp.com",
  projectId: "tesla-clone-554a7",
  storageBucket: "tesla-clone-554a7.appspot.com",
  messagingSenderId: "128637135964",
  appId: "1:128637135964:web:a4acd588c023dad7e64a99"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }