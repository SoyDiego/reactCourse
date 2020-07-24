import { renderHook, act } from "@testing-library/react-hooks";
import "@testing-library/jest-dom";
import useForm from "../../hooks/useForm";

describe("Pruebas en useForm", () => {
	const initialForm = {
		name: "Diego",
		email: "test@test.com",
	};

	test("Debe de regresar un formulario por defecto ", () => {
		const { result } = renderHook(() => useForm(initialForm));
		const [formValues, handleInputChange, reset] = result.current;

		expect(formValues).toEqual(initialForm);
		expect(typeof handleInputChange).toBe("function");
		expect(typeof reset).toBe("function");
	});

	test("Debe de cambiar el valor del formulario (Cambiar NAME) ", () => {
		const { result } = renderHook(() => useForm(initialForm));
		const [, handleInputChange] = result.current;

		act(() => {
			handleInputChange({
				target: {
					name: "name",
					value: "John",
				},
			});
		});

		const [formValues] = result.current;
		expect(formValues).toEqual({ ...initialForm, name: "John" });
	});

	test("Debe de restablecer el formulario con RESET", () => {
		const { result } = renderHook(() => useForm(initialForm));
		const [formValues, handleInputChange, reset] = result.current;

		act(() => {
			handleInputChange({
				target: {
					name: "name",
					value: "John",
				},
			});
		});

		act(() => {
			reset();
		});

		expect(formValues).toEqual({ ...initialForm, name: "Diego" });
	});
});
