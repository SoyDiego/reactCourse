const initialState = {
	notes: [],
	active: null,
};
export const notesReducer = (state = initialState, action) => {
	switch (action.type) {
		case "hola":
			return {};

		default:
			return state;
	}
};
