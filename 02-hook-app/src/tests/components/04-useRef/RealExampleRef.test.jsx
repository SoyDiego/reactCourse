import React from "react";
import { shallow } from "enzyme";
import RealExampleRef from "../../../components/04-useRef/RealExampleRef";
import "@testing-library/jest-dom";

describe("Prueba en <RealExampleRef/>", () => {
	const wrapper = shallow(<RealExampleRef />);

	test("Debe de mostrarse correctamente ", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe de mostrar el componente <MultipleCustomHooks/> ", () => {
		const button = wrapper.find("button");
		button.simulate("click");

		expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
	});
});
