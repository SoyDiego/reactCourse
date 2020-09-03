import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { LoginScreen } from "../auth/LoginScreen";
import { CalendarScreen } from "../calendar/CalendarScreen";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { startChecking } from "../../actions/auth";

export const AppRouter = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(startChecking());
	}, [dispatch]);

	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={CalendarScreen} />

					<Route exact path="/login" component={LoginScreen} />

					<Redirect to="/" />
				</Switch>
			</div>
		</Router>
	);
};
