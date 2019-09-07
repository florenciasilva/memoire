import * as firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAe0HmfjI8i9vip0SQVQSybHSrVKiZWjvU",
    authDomain: "labnotes-e0b05.firebaseapp.com",
    databaseURL: "https://labnotes-e0b05.firebaseio.com",
    projectId: "labnotes-e0b05",
    storageBucket: "",
    messagingSenderId: "168248122825",
    appId: "1:168248122825:web:d3c535e6d5b5be13c81c18"
  };
  // Initialize Firebase
const init = firebase.initializeApp(firebaseConfig);

export default init;