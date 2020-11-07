import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';
// import gcloud from 'google-cloud';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyDuUjunZ3deGpw-9wJdAuXVrXwEhdNXUno',
  authDomain: 'smriti-44a9e.firebaseapp.com',
  databaseURL: 'https://smriti-44a9e.firebaseio.com',
  projectId: 'smriti-44a9e',
  storageBucket: 'smriti-44a9e.appspot.com',
  messagingSenderId: '725209509614',
  appId: '1:725209509614:web:d93398f9c3b59d3c9fcdff',
  measurementId: 'G-N0PWWRCEX4',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage };
