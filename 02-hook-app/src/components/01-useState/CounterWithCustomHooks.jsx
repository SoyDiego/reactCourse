import React from "react";
import "./counter.css";
import useCounter from "../../hooks/useCounter";

const CounterWithCustomHooks = () => {
	const { state, increment, decrement, reset } = useCounter();
	return (
		<div>
			<h1>Counter with Hooks: {state}</h1>
			<hr />

			<button className="btn btn-primary" onClick={() => increment(1)}>
				+1
			</button>
			<button className="btn btn-warning" onClick={reset}>
				Reset
			</button>
			<button className="btn btn-danger" onClick={() => decrement(1)}>
				-1
			</button>
		</div>
	);
};

export default CounterWithCustomHooks;
