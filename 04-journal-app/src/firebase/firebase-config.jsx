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

const firebaseConfigTesting = {
	apiKey: "AIzaSyByQ6XmffvDNjusxSkca3OYKJGOgDQpvnY",
	authDomain: "redux-test-fd272.firebaseapp.com",
	databaseURL: "https://redux-test-fd272.firebaseio.com",
	projectId: "redux-test-fd272",
	storageBucket: "redux-test-fd272.appspot.com",
	messagingSenderId: "547174499965",
	appId: "1:547174499965:web:e62394f72bb55db35e5314",
	measurementId: "G-SV6T8GM6XX",
};

if (process.env.NODE_ENV === "test") {
	//testing
	firebase.initializeApp(firebaseConfigTesting);
} else {
	// dev/prod
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
