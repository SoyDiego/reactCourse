import React from "react";
import { mount } from "enzyme";
import "@testing-library/jest-dom";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { CalendarScreen } from "../../../components/calendar/CalendarScreen";
import { messages } from "../../../helpers/calendar-messages-es";
import { eventSetActive } from "../../../actions/events";
import { act } from "@testing-library/react";

jest.mock("../../../actions/events", () => ({
	eventSetActive: jest.fn(),
	eventStartLoading: jest.fn(),
}));

Storage.prototype.setItem = jest.fn();

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
	calendar: {
		events: [],
	},
	auth: {
		uid: "1234",
	},
	ui: {
		modalOpen: false,
	},
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
	<Provider store={store}>
		<CalendarScreen />
	</Provider>
);

describe("Pruebas en CalendarScreen", () => {
	test("Debe de mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("Pruebas con las interacciones del calendario", () => {
		const calendar = wrapper.find("Calendar");

		const calendarMessages = calendar.prop("messages");
		expect(calendarMessages).toEqual(messages);

		calendar.prop("onDoubleClickEvent")();
		expect(store.dispatch).toHaveBeenCalledWith({
			type: "[UI] Open Modal",
		});

		calendar.prop("onSelectEvent")({ start: "Hola" });
		expect(eventSetActive).toHaveBeenCalledWith({
			start: "Hola",
		});

		act(() => {
			calendar.prop("onView")("week");
			expect(localStorage.setItem).toHaveBeenCalledWith(
				"lastView",
				"week"
			);
		});
	});
});
