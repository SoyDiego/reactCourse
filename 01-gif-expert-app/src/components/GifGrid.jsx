import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		(async () => {
			const api = process.env.REACT_APP_API;
			const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=Rick++and+Morty&api_key=${api}`;
			const resp = await fetch(url);
			const { data } = await resp.json();

			const gifs = data.map((img) => {
				return {
					id: img.id,
					title: img.title,
					url: img.images?.downsized_medium.url,
				};
			});
			setImages(gifs);
		})();
	}, []);

	return (
		<>
			<h3>{category}</h3>
			<div className="card-grid">
				{images.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};

export default GifGrid;
