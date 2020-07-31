import React from "react";
import { mount } from "enzyme";
import "@testing-library/jest-dom";
import { MemoryRouter, Route } from "react-router-dom";
import HeroScreen from "../../../components/heroes/HeroScreen";

describe("Pruebas en el componente <HeroScreen/>", () => {
	const history = {
		length: 10,
		push: jest.fn(),
		goBack: jest.fn(),
	};

	test("Debe de mostrar el componente REDIRECT si no hay argumentos en el URL", () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={["/hero"]}>
				<HeroScreen history={history} />
			</MemoryRouter>
		);
		expect(wrapper.find("Redirect").exists()).toBe(true);
	});

	test("Debe de mostrar un hero si el parametro existe y se encuentra", () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={["/hero/marvel-spider"]}>
				<Route path="/hero/:heroeId" component={HeroScreen} />
			</MemoryRouter>
		);

		expect(wrapper.find(".row").exists()).toBe(true);
	});

	test("Debe de regresar a la pantalla anterior con PUSH", () => {
		const history = {
			length: 1,
			push: jest.fn(),
			goBack: jest.fn(),
		};

		const wrapper = mount(
			<MemoryRouter initialEntries={["/hero/marvel-spider"]}>
				<Route
					path="/hero/:heroeId"
					component={() => <HeroScreen history={history} />}
				/>
			</MemoryRouter>
		);

		wrapper.find("button").prop("onClick")();
		expect(history.push).toHaveBeenCalledWith("/");
		expect(history.goBack).not.toHaveBeenCalledWith("/");
	});

	test("Debe de regresar a la pantalla anterior", () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={["/hero/marvel-spider"]}>
				<Route
					path="/hero/:heroeId"
					component={() => <HeroScreen history={history} />}
				/>
			</MemoryRouter>
		);

		wrapper.find("button").prop("onClick")();
		expect(history.goBack).toHaveBeenCalled();
		expect(history.push).toHaveBeenCalledTimes(0);
	});

	test("Debe de llamar el REDIRECT si el heroe no existe", () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={["/hero/marvel-spider123123413"]}>
				<Route
					path="/hero/:heroeId"
					component={() => <HeroScreen history={history} />}
				/>
			</MemoryRouter>
		);

		expect(wrapper.text()).toBe("");
	});
});
