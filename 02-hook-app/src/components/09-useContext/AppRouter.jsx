import React from "react";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import AboutScreen from "./AboutScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import NavBar from "./NavBar";

const AppRouter = () => {
	return (
		<Router>
			<div>
				<NavBar />
				<div className="container">
					<Switch>
						<Route exact path="/about" component={AboutScreen} />
						<Route exact path="/login" component={LoginScreen} />
						<Route exact path="/" component={HomeScreen} />

						{/* Si no hay ningún path, redirige al HOME */}
						<Redirect to="/" />
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default AppRouter;
