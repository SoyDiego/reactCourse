import React from "react";
import { mount } from "enzyme";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { startLogout } from "../../../actions/auth";
import { startNewNote } from "../../../actions/notes";
import { Sidebar } from "../../../components/journal/Sidebar";

jest.mock("../../../actions/auth", () => ({
	startLogout: jest.fn(),
}));

jest.mock("../../../actions/notes", () => ({
	startNewNote: jest.fn(),
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
		active: null,
		notes: [],
	},
};

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
	<Provider store={store}>
		<Sidebar />
	</Provider>
);

describe("Pruebas en <SideBar/>", () => {
	test("Debe de mostrarse correctamente. ", () => {
        expect(wrapper).toMatchSnapshot()
    });

	test("Debe de mostrarse startLogout", () => {
        wrapper.find('button').prop('onClick')()
        expect(startLogout).toHaveBeenCalled()
    });

	test("Debe de llamar el startNewNote()", () => {
        wrapper.find('.journal__new-entry').prop('onClick')()
        expect(startNewNote).toHaveBeenCalled()
    });
});
