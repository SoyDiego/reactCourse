import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Pruebas en <GifExpertApp/>", () => {
	test("Debe de mostrarse correctamente ", () => {
		const wrapper = shallow(<GifExpertApp />);
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe de mostrar una lista de categorías", () => {
		const categories = ["Dragon Ball", "Captain Tsubasa"];
		const wrapper = shallow(
			<GifExpertApp defaultCategories={categories} />
		);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
	});
});
