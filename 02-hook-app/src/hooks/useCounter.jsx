import { useState } from "react";

const useCounter = (initialState = 10) => {
	const [counter, setCounter] = useState(initialState);

	//Ejemplo para useCounter
	// const increment = (factor = 1) => {
	// 	setState(state + factor);
	// };

	// const decrement = (factor = 1) => {
	// 	setState(state - factor);
	// };

	//Ejemplo para MultipleCustomHook
	const increment = () => {
		setCounter(counter + 1);
	};

	const decrement = () => {
		setCounter(counter - 1);
	};

	const reset = () => {
		setCounter(initialState);
	};

	return {
		counter,
		increment,
		decrement,
		reset,
	};
};

export default useCounter;
