import React from "react";
import "./effects.css";
import { useState, useEffect } from "react";
import Message from "./Message";

const SimpleForm = () => {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
	});

	const { name, email } = formState;

	useEffect(() => {
		console.log(name);
	}, [name]);

	const handleInputChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<h1>useEffect</h1>
			<hr />

			<div className="form-group">
				<input
					type="text"
					name="name"
					className="form-control"
					placeholder="Tu nombre"
					autoComplete="off"
					value={name}
					onChange={handleInputChange}
				/>
			</div>

			<div className="form-group">
				<input
					type="text"
					name="email"
					className="form-control"
					placeholder="email@gmail.com"
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				/>
			</div>

			{(name === '123') && <Message/>}
		</>
	);
};

export default SimpleForm;
