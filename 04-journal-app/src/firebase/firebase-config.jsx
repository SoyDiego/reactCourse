import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCyqzosVfpfAW6ucrHd61RYR_LB1mFab38",
	authDomain: "react-app-cursos-58c54.firebaseapp.com",
	databaseURL: "https://react-app-cursos-58c54.firebaseio.com",
	projectId: "react-app-cursos-58c54",
	storageBucket: "react-app-cursos-58c54.appspot.com",
	messagingSenderId: "87579927924",
	appId: "1:87579927924:web:cbd40ece94d92908dc7821",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
