// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyB8-EJu7-VMdFEYzIHAu4RToxWSGOmzX08",
    authDomain: "whatsapp-clone-ac4b5.firebaseapp.com",
    projectId: "whatsapp-clone-ac4b5",
    storageBucket: "whatsapp-clone-ac4b5.appspot.com",
    messagingSenderId: "366425314580",
    appId: "1:366425314580:web:49d5640717a58a9a251e01",
    measurementId: "G-YBF22FBQWZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  export default db; 



