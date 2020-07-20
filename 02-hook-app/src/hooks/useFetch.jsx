import { useState, useEffect, useRef } from "react";

const useFetch = (url) => {
	const [state, setState] = useState({
		data: null,
		loading: true,
		error: null,
	});

	const isMounted = useRef(true);

	useEffect(() => {
		//Cuando se desmonta, pasar a falso.
		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		setState({
			data: null,
			loading: true,
			error: null,
		});

		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				if (isMounted.current) {
					setState({
						loading: false,
						error: null,
						data: data,
					});
				} else {
					console.log("SetState no se llamó");
				}
			});
	}, [url]);

	return state;
};

export default useFetch;
