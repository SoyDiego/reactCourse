import React from "react";
import { mount } from "enzyme";
import "@testing-library/jest-dom";
import { AuthContext } from "../../../auth/AuthContext";
import { MemoryRouter, Router } from "react-router-dom";
import { types } from "../../../types/types";
import HeroScreen from "../../../components/heroes/HeroScreen";

describe("Pruebas en el componente <HeroScreen/>", () => {
	const history = {
		length: 10,
		push: jest.fn(),
		goBack: jest.fn(),
	};

	const wrapper = mount(
		<MemoryRouter initialEntries={["/hero"]}>
			<HeroScreen history={history} />
		</MemoryRouter>
	);

	test("Debe de mostrar el componente REDIRECT si no hay argumentos en el URL", () => {
		expect(wrapper.find("Redirect").exists()).toBe(true);
	});
});
