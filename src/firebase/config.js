import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB3cyKmpAmwKHX1VYy0Fo4xOY7vZwYG7Ec',
  authDomain: 'vue-blog-system-f174c.firebaseapp.com',
  projectId: 'vue-blog-system-f174c',
  storageBucket: 'vue-blog-system-f174c.appspot.com',
  messagingSenderId: '505006714665',
  appId: '1:505006714665:web:a807ccfe39b55990065138',
};
//init app
firebase.initializeApp(firebaseConfig);

//for setup database
let db = firebase.firestore();

//for date setup
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

//for authentication
let auth = firebase.auth();
export { db, timestamp, auth };
