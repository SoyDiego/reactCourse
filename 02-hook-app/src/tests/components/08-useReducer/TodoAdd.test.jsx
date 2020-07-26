import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import ToDoAdd from "../../../components/08-useReducer/ToDoAdd";

describe("Pruebas en <TodoAdd/>", () => {
	const handleAddTodo = jest.fn();
	const wrapper = shallow(<ToDoAdd handleAddTodo={handleAddTodo} />);

	test("Debe de mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("NO debe de llamar addTODO", () => {
		const formSubmit = wrapper.find("form").prop("onSubmit");
		formSubmit({ preventDefault() {} });

		expect(handleAddTodo).toHaveBeenCalledTimes(0);
	});

	test("Debe de llamar la funcion handleAddTodo", () => {
		//Con un argumento -- called
		const input = wrapper.find("input");
		input.simulate("change", {
			target: { value: "Testing", name: "description" },
		});

		const formSubmit = wrapper.find("form").prop("onSubmit");
		formSubmit({ preventDefault() {} });

		expect(handleAddTodo).toHaveBeenCalledTimes(1);
		expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
		expect(handleAddTodo).toHaveBeenCalledWith({
			id: expect.any(Number),
			desc: "Testing",
			done: false,
		});

		//Probando el RESET (Que los campos esten vacios)
		expect(wrapper.find("input").prop("value")).toBe("");
	});
});
