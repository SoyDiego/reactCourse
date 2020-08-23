import React from "react";
import { mount } from "enzyme";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { activeNote } from "../../../actions/notes";
import { NoteScreen } from "../../../components/notes/NoteScreen";

jest.mock("../../../actions/notes", () => ({
	activeNote: jest.fn(),
}));

const initState = {
	auth: {
		uid: "1",
		name: "Diego",
	},
	ui: {
		loading: false,
		msgError: null,
	},
	notes: {
		active: {
			id: 1234,
			title: "Hola",
			body: "mundo!",
			date: 0,
		},
		notes: [],
	},
};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
	<Provider store={store}>
		<NoteScreen />
	</Provider>
);

describe("Pruebas en <NoteScreen />", () => {
	test("Debe de mostrarse correctamente.", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe de disparar el activeNote()", () => {
		wrapper.find('input[name="title"]').simulate("change", {
			target: {
				name: "title",
				value: "Hola",
			},
		});

		expect(activeNote).toHaveBeenLastCalledWith(1234, {
			id: 1234,
			title: "Hola",
			body: "mundo!",
			date: 0,
		});
	});
});
