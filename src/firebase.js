import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyA2DD0IscuaqTfBbjS9TG6d8X9I46hlQ18",
  authDomain: "memoire-8db95.firebaseapp.com",
  databaseURL: "https://memoire-8db95.firebaseio.com",
  projectId: "memoire-8db95",
  storageBucket: "memoire-8db95.appspot.com",
  messagingSenderId: "134358652278",
  appId: "1:134358652278:web:ae6a1482f6cd214c965657"
  };
  const fbInit = firebase.initializeApp(firebaseConfig);

  export default fbInit;
