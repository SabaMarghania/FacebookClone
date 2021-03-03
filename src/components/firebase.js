import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDIaUkuLyT34k1RhGJ1NMW60xzWiLhg-SY",
    authDomain: "facebook-clone-5691b.firebaseapp.com",
    projectId: "facebook-clone-5691b",
    storageBucket: "facebook-clone-5691b.appspot.com",
    messagingSenderId: "918304272155",
    appId: "1:918304272155:web:816428fb432b29dc77edbe",
    measurementId: "G-C1699CT4LP"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
