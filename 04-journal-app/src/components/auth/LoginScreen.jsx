import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startLoginEmailPassword, startGoogleLogin } from "../../actions/auth";
import validator from "validator";
import { setError, removeError } from "../../actions/ui";

export const LoginScreen = () => {
	const dispatch = useDispatch();
	const { msgError, loading } = useSelector((state) => state.ui);

	const [formValues, handleInputChange] = useForm({
		email: "diegofranchina@gmail.com",
		password: "123456",
	});

	const { email, password } = formValues;

	const handleLogin = (e) => {
		e.preventDefault();

		if (isFormValid()) {
			dispatch(startLoginEmailPassword(email, password));
		}
	};

	const isFormValid = () => {
		if (!validator.isEmail(email)) {
			dispatch(setError("Valid email is required"));
			return false;
		} else if (password.length === 0) {
			dispatch(setError("Type your password"));
			return false;
		}

		dispatch(removeError());
		return true;
	};

	const handleGoogleLogin = () => {
		dispatch(startGoogleLogin());
	};

	return (
		<>
			<h3 className="auth__title">Login</h3>
			<form onSubmit={handleLogin}>
				{msgError && (
					<div className="auth__alert-error">{msgError}</div>
				)}
				<input
					className="auth__input"
					type="text"
					placeholder="email"
					name="email"
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				/>
				<input
					className="auth__input"
					type="password"
					placeholder="Password"
					name="password"
					value={password}
					onChange={handleInputChange}
				/>
				<button
					className="btn btn-primary btn-block"
					type="submit"
					disabled={loading}>
					Login
				</button>
			</form>

			<div className="auth__social-networks">
				<p>Login with Social Networks</p>
				<div className="google-btn" onClick={handleGoogleLogin}>
					<div className="google-icon-wrapper">
						<img
							className="google-icon"
							src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
							alt="google button"
						/>
					</div>
					<p className="btn-text">
						<b>Sign in with google</b>
					</p>
				</div>
			</div>

			<Link className="link" to="./register">
				Create new account
			</Link>
		</>
	);
};
