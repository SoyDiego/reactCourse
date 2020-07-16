export const getGifs = async (category) => {
	const api = process.env.REACT_APP_API;
	const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${category}&api_key=${api}`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map((img) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url,
		};
	});

	return gifs;
};
