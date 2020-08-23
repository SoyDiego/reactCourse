import React from "react";
import { mount } from "enzyme";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import { login } from "../../actions/auth";
import { AppRouter } from "../../routers/AppRouter";
import { act } from "@testing-library/react";
import { firebase } from "../../firebase/firebase-config";

jest.mock("../../actions/auth", () => ({
	login: jest.fn(),
}));

const initState = {
	auth: {},
	ui: {
		loading: false,
		msgError: null,
	},
	notes: {
		active: {
			id: "ABC",
		},
		notes: [],
	},
};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let store = mockStore(initState);
store.dispatch = jest.fn();

describe("Pruebas en <AppRouter/>", () => {
	test("Debe de llamar el login si estoy autenticado", async () => {
		let user;

		await act(async () => {
			const userCred = await firebase
				.auth()
				.signInWithEmailAndPassword("test@testing.com", "123456");
			user = userCred.user;

			const wrapper = mount(
				<Provider store={store}>
					<MemoryRouter>
						<AppRouter />
					</MemoryRouter>
				</Provider>
			);

        });
        
        expect(login).toHaveBeenCalledWith("hQu6HH62CIhsRKYYrTnar1zKofj2", null);
	});
});
