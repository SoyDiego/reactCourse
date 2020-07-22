import React from "react";
import useForm from "../../hooks/useForm";

const ToDoAdd = ({ handleAddTodo }) => {
	const [{ description }, handleInputChange, reset] = useForm({
		description: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (description.trim().length <= 1) return;

		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false,
		};

		handleAddTodo(newTodo);
		reset();
	};

	return (
		<>
			<h4>Agregar ToDo</h4>
			<hr />
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					className="from-control w-100"
					name="description"
					placeholder="Aprender..."
					autoComplete="off"
					value={description}
					onChange={handleInputChange}
				/>

				<button
					type="submit"
					className="btn btn-outline-primary mt-1 btn-block">
					Agregar
				</button>
			</form>
		</>
	);
};

export default ToDoAdd;
