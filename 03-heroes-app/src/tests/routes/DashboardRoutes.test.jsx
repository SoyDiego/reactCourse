import React from "react";
import { mount } from "enzyme";
import "@testing-library/jest-dom";
import { AuthContext } from "../../auth/AuthContext";
import { MemoryRouter } from "react-router-dom";
import DashboardRoutes from "../../routers/DashboardRoutes";

describe("Pruebas en <DashboardRoutes />", () => {
	test("Debe mostrarse correctamente", () => {
		const contextValue = {
			dispatch: jest.fn(),
			user: {
				logged: true,
				name: "Diego",
			},
		};
		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter>
					<DashboardRoutes />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find("span").text().trim()).toBe("Diego");
	});
});
