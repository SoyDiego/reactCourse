import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = ({ defaultCategories = [] }) => {
	// const [categories, setCategories] = useState([
	// 	"Dragon Ball"
	// ]);

	const [categories, setCategories] = useState(defaultCategories); //Para testing usar esto, para la app comentar esto y descomentar lo de arriba.

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />

			<ol>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</>
	);
};

export default GifExpertApp;
