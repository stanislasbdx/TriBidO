import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyAOZPiF8RPGBnJFppoe234nXkAA1AqRJ2E",
	authDomain: "tribido-236f1.firebaseapp.com",
	databaseURL: "https://tribido-236f1-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "tribido-236f1",
	storageBucket: "tribido-236f1.appspot.com",
	messagingSenderId: "854985728785",
	appId: "1:854985728785:web:4434d47373316a402162b0",
	measurementId: "G-ZGV8YBGH6M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();