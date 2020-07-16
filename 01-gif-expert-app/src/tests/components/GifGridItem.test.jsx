import React from "react";
import "@testing-library/jest-dom";
import GifGridItem from "../../components/GifGridItem";
import { shallow } from "enzyme";

describe("Pruebas en <GifGridItem/>", () => {
	test("Debe de mostrar el componente correctamente. ", () => {
		const wrapper = shallow(<GifGridItem />);
		expect(wrapper).toMatchSnapshot();
	});
});
