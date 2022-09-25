import firebase from 'firebase/app' 
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAWr9NbTIRxFXecyq3HEG8y3nfUU3_m1-Q",
  authDomain: "quitter2-9fc1a.firebaseapp.com",
  projectId: "quitter2-9fc1a",
  storageBucket: "quitter2-9fc1a.appspot.com",
  messagingSenderId: "1008902058332",
  appId: "1:1008902058332:web:89e5ed36b63c60a91e1199"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig) 

// access firebase database with db variable 
const db = firebase.firestore() 

export default db
