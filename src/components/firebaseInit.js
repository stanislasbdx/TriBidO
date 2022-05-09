import firebase from 'firebase';

var config = {
	apiKey: process.env.VUE_APP_API_KEY,
	authDomain: "tribido-236f1.firebaseapp.com",
	databaseURL: "https://tribido-236f1-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "tribido-236f1",
	storageBucket: "tribido-236f1.appspot.com",
	messagingSenderId: "854985728785",
	appId: process.env.VUE_APP_ID,
	measurementId: process.env.VUE_APP_MEASUREMENT_ID
};
firebase.initializeApp(config);

export default firebase.database();