import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import HookApp from "../HookApp";

describe("Probando <HookApp/>", () => {
	test("Generando snapshot", () => {
		const wrapper = shallow(<HookApp />);
		expect(wrapper).toMatchSnapshot();
	});
});
