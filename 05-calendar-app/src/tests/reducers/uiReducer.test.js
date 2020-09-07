import "@testing-library/jest-dom";
import { uiReducer } from "../../reducers/uiReducer";
import { uiOpenModal, uiCloseModal } from "../../actions/ui";

const initState = {
	modalOpen: false,
};

describe("Prueba en uiReducer", () => {
	test("Debe de retonar el estado inicial", () => {
		const state = uiReducer(initState, {});
		expect(state).toEqual(initState);
	});

	test("Debe de abrir y cerrar el modal ", () => {
		const modalOpen = uiOpenModal();
		const state = uiReducer(initState, modalOpen);

		expect(state).toEqual({ modalOpen: true });

		const modalClose = uiCloseModal();
		const stateClose = uiReducer(initState, modalClose);

		expect(stateClose).toEqual({ modalOpen: false });
	});
});
