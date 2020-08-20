import "@testing-library/jest-dom";
import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe("Pruebas en AuthReducer", () => {
	test("Probando login", () => {
		const initState = {};
		const action = {
			type: types.login,
			payload: {
				uid: "abc",
				displayName: "Diego",
			},
		};
		const state = authReducer(initState, action);

		expect(state).toEqual({
			uid: "abc",
			name: "Diego",
		});
	});

	test("Probando logout", () => {
		const initState = {
			uid: "abc",
			name: "Diego",
		};
		const action = {
			type: types.logout,
		};
		const state = authReducer(initState, action);

		expect(state).toEqual({});
	});

	test("Probando Default", () => {
		const initState = {};
		const action = {
			type: "lo que sea",
		};
		const state = authReducer(initState, action);

		expect(state).toEqual(initState);
	});
});
