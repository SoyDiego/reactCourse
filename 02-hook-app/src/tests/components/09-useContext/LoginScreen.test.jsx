import React from "react";
import { mount } from "enzyme";
import "@testing-library/jest-dom";
import LoginScreen from "../../../components/09-useContext/LoginScreen";
import UserContext from "../../../components/09-useContext/UserContext";

describe("Pruebas en <LoginScreen/>", () => {
	const setUser = jest.fn();

	const wrapper = mount(
		<UserContext.Provider value={{ setUser }}>
			<LoginScreen />
		</UserContext.Provider>
	);
	test("Debe de mostrarse correctamente. ", () => {
		expect(wrapper).toMatchSnapshot();
	});
	test("Debe de ejecutar el setUser con el argumento esperado", () => {
		const newUser = { id: 1234, name: "Diego" };
		wrapper.find("button").simulate("click");
		expect(setUser).toBeCalledTimes(1);
		expect(setUser).toBeCalledWith({
			id: 1234,
			name: "Diego",
		});
	});
});
