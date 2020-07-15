import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyCMNf3n5mtT2KrM1FYhH2GvhWqfnezwtbc",
  authDomain: "meuapp-b67c8.firebaseapp.com",
  databaseURL: "https://meuapp-b67c8.firebaseio.com",
  projectId: "meuapp-b67c8",
  storageBucket: "meuapp-b67c8.appspot.com",
  messagingSenderId: "724494064521",
  appId: "1:724494064521:web:671be48d53c7768b8a9f58",
  measurementId: "G-PHGY11DKPR"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;