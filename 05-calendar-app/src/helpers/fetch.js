const baseURL = process.env.REACT_APP_API_URL;

export const fetchSinToken = (endpoint, data, method = "GET") => {
	const url = `${baseURL}/${endpoint}`; //localhost:4000/api/

	if (method === "GET") {
		return fetch(url);
	} else {
		return fetch(url, {
			method,
			headers: {
				"Content-Type": "application/json",
            },
            body: JSON.stringify(data)
		});
	}
}; 
