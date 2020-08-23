import {
	login,
	logout,
	startLogout,
	startLoginEmailPassword,
} from "../../actions/auth";
import { types } from "../../types/types";

import "@testing-library/dom";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe("Pruebas con las acciones de Auth", () => {
	beforeEach(() => {
		store = mockStore(initState);
	});

	test("Login y Logout deben crear la accion respectiva ", () => {
		const uid = "123456";
		const displayName = "Diego";

		const loginActions = login(uid, displayName);
		const logoutActions = logout();

		expect(loginActions).toEqual({
			type: types.login,
			payload: {
				uid,
				displayName,
			},
		});

		expect(logoutActions).toEqual({
			type: types.logout,
		});
	});

	test("Debe de realizar el startLogout", async () => {
		await store.dispatch(startLogout());

		const actions = store.getActions();

		expect(actions[0]).toEqual({
			type: types.logout,
		});

		expect(actions[1]).toEqual({
			type: types.notesLogoutCleaning,
		});
	});

	test("Debe de iniciar el startLoginEmailPassword", async () => {
		await store.dispatch(
			startLoginEmailPassword("test@testing.com", "123456")
		);

		const actions = store.getActions();
		expect(
			actions[1]).toEqual({
				type: types.login,
				payload: {
					uid: "hQu6HH62CIhsRKYYrTnar1zKofj2",
					displayName: null,
				},
			})
	});
});
