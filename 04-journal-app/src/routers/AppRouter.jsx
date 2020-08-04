import React, { useEffect } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "../components/journal/JournalScreen";
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";

export const AppRouter = () => {
	const dispatch = useDispatch();

	//Mantiene el usuario autenticado
	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
			}
		});
	}, [dispatch]);

	return (
		<Router>
			<div>
				<Switch>
					<Route path="/auth" component={AuthRouter} />
					<Route exact path="/" component={JournalScreen} />
					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</Router>
	);
};
