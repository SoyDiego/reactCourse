import React, { useReducer } from "react";
import todoReducer from "./todoReducer";
import "./styles.css";

const initialState = [
	{
		id: new Date().getTime(),
		desc: "Aprender React",
		done: false,
	},
];

const TodoApp = () => {
	const [todos] = useReducer(todoReducer, initialState);

	console.table(todos);

	return (
		<div>
			<h1>ToDoApp ( {todos.length})</h1>
			<hr />

			<div className="row">
				<div className="col-7">
					<ul className="list-group list-group-flush">
						{todos.map((todo, index) => (
							<li key={todo.id} className="list-group-item">
								<p className="text-center">
									{index + 1}) {todo.desc}
								</p>
								<button className="btn btn-danger">
									Borrar
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className="col-5">
					<h4>Agregar ToDo</h4>
					<hr />
					<form action="">
						<input
							type="text"
							className="from-control w-100"
							name="description"
							placeholder="Aprender..."
							autoComplete="off"
						/>

						<button className="btn btn-outline-primary mt-1 btn-block">
							Agregar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default TodoApp;
