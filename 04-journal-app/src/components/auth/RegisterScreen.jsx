import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";

export const RegisterScreen = () => {
	const [formValues, handleInputChange] = useForm({
		name: "Diego",
		email: "test@test.com",
		password: "123456",
		password2: "123456",
	});
	const { name, email, password, password2 } = formValues;

	const handleRegister = (e) => {
		e.preventDefault();
		if (isFormValid()) {
			console.log("Formulario correcto");
		}
	};

	const isFormValid = () => {
		if (name.trim().length === 0) {
			console.log("Name is required");
			return false;
		} else if (!validator.isEmail(email)) {
			console.log("Valid email is required");
			return false;
		} else if (password !== password2 || password.length < 6) {
			console.log(
				"Password should be at least 6 characters and match each other."
			);
			return false;
		}
		return true;
	};

	return (
		<>
			<h3 className="auth__title">Register</h3>
			<form onSubmit={handleRegister}>
				<div className="auth__alert-error">Hola Mundo</div>
				<input
					className="auth__input"
					type="text"
					placeholder="Name"
					name="name"
					autoComplete="off"
					value={name}
					onChange={handleInputChange}
				/>
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

				<input
					className="auth__input"
					type="password"
					placeholder="Confirm Password"
					name="password2"
					value={password2}
					onChange={handleInputChange}
				/>
				<button
					className="btn btn-primary btn-block mb-5"
					type="submit">
					Register
				</button>
			</form>

			<Link className="link mt-5" to="./login">
				Already registered?
			</Link>
		</>
	);
};
