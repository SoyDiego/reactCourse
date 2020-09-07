import React from "react";
import { mount } from "enzyme";
import "@testing-library/jest-dom";
import { DeleteEventFab } from "../../../components/ui/DeleteEventFab";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { eventStartDelete } from "../../../actions/events";

jest.mock("../../../actions/events", () => ({
	eventStartDelete: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
	<Provider store={store}>
		<DeleteEventFab />
	</Provider>
);

describe("Prueba en DeleteEventFab", () => {
	test("Debe de mostrarse correctamente.", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe de llamar el eventStartDelete al hacer click", () => {
		wrapper.find("button").prop("onClick")();
		expect(eventStartDelete).toHaveBeenCalled();
	});
});
