import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBnTCWOP4Z0Tkea1zYS-W-7yVOFrcGFez8',
	authDomain: 'udemy-vue-firebase-sites-3ad62.firebaseapp.com',
	projectId: 'udemy-vue-firebase-sites-3ad62',
	storageBucket: 'udemy-vue-firebase-sites-3ad62.appspot.com',
	messagingSenderId: '810452045881',
	appId: '1:810452045881:web:1847247356d0d1c6867de8',
	measurementId: 'G-GLLSNNJD9R'
};

//init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, projectAuth };
