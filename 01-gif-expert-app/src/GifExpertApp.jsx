import React, {useState} from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
	// const categories = ['One Punch', 'Samurai X', 'Dragon Ball']

	const [categories, setCategories] = useState([
		"One Punch",
		"Samurai X",
		"Dragon Ball",
	]);

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories}/>
			<hr />

			<ol>
				{categories.map((category) => (
					<li key={category}>{category}</li>
				))}
			</ol>
		</>
	);
};

export default GifExpertApp;
