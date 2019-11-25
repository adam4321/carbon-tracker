/*****************************************************************
**  Description: Firebase database and storage configuration file
*****************************************************************/

// Api key
import firebase_credential from './credentials.js'; 

// Firebase configuration
const firebaseConfig = {
    apiKey: firebase_credential,
    authDomain: "cs361-co2-tracker.firebaseapp.com",
    databaseURL: "https://cs361-co2-tracker.firebaseio.com",
    projectId: "cs361-co2-tracker",
    storageBucket: "cs361-co2-tracker.appspot.com",
    messagingSenderId: "969301294823",
    appId: "1:969301294823:web:d60da67816ff10d7a3ec42",
    measurementId: "G-KPKFZVHCTM"
};

firebase.initializeApp(firebaseConfig);
export default firebase;