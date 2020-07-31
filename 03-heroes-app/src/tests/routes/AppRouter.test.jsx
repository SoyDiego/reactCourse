import React from "react";
import { mount } from "enzyme";
import "@testing-library/jest-dom";
import AppRouter from "../../routers/AppRouter";
import { AuthContext } from "../../auth/AuthContext";

describe("Pruebas en <AppRouter/>", () => {
	test("Debe de mostrar login si no está autenticado", () => {
		const contextValue = {
			dispatch: jest.fn(),
			user: {
				logged: false,
			},
		};
		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<AppRouter />
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
	});

	test("Debe de mostrar el componente MARVEL si está autenticado", () => {
		const contextValue = {
			dispatch: jest.fn(),
			user: {
				logged: true,
				name: "Diego",
			},
		};
		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<AppRouter />
			</AuthContext.Provider>
		);

		expect(wrapper.find("h1").text().trim()).toBe("Marvel Screen");
	});
});
