import React from "react";
import { mount } from "enzyme";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { JournalEntry } from "../../../components/journal/JournalEntry";
import { activeNote } from "../../../actions/notes";

const initState = {};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let store = mockStore(initState);
store.dispatch = jest.fn();
const nota = {
	id: 10,
	date: 0,
	title: "hola",
	body: "mundo",
	url: "https://asdf.com/foto.jpg",
};

const wrapper = mount(
	<Provider store={store}>
		<JournalEntry {...nota} />
	</Provider>
);

describe("Pruebas en <JournalEntry/>", () => {
	test("Debe de mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe de activar la nota", () => {
		wrapper.find(".journal__entry").prop("onClick")();
		expect(store.dispatch).toHaveBeenCalledWith(
			activeNote(nota.id, { ...nota })
		);
	});
});
