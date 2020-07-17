import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
		console.log("Llamado");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim() === "") return null;
		console.log('handleSubmit', inputValue);

		setCategories((category) => [inputValue, ...category]);
		setInputValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<p>{inputValue}</p>
			<input
				type="text"
				value={inputValue}
				onChange={handleInputChange}
			/>
		</form>
	);
};

export default AddCategory;

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
