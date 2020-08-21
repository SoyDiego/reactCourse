import configureStore from "redux-mock-store"; //ES6 modules
import thunk from "redux-thunk";
import { startNewNote, startLoadingNotes, startSaveNote } from "../../actions/notes";
import { types } from "../../types/types";
import { db } from "../../firebase/firebase-config";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = 
	{
	auth: {
		uid: "123456",
	},
}

let store = mockStore(initState);

describe("Pruebas con las acciones de notes", () => {

	beforeEach(()=>{
		store = mockStore(initState)
	})

	test("Debe de crear una nueva nota startNewNote", async () => {
		await store.dispatch(startNewNote());

		const actions = store.getActions();

		expect(actions[0]).toEqual({
			type: types.notesActive,
			payload: {
				id: expect.any(String),
				title: "",
				body: "",
				date: expect.any(Number),
			},
		});
		expect(actions[1]).toEqual({
			type: types.notesAddNew,
			payload: {
				id: expect.any(String),
				title: "",
				body: "",
				date: expect.any(Number),
			},
		});

		const docId = actions[0].payload.id;
		await db.collection("123456/journal/notes").doc(docId).delete();
	});

	test("startLoadingNotes debe cargar las notas", async () => {
		await store.dispatch(startLoadingNotes("123456"));
		const actions = store.getActions();

		expect(actions[0]).toEqual({
			type: types.notesLoad,
			payload: expect.any(Array)
		})

		const expected = {
			id: expect.any(String),
			title: expect.any(String),
			body: expect.any(String),
			date: expect.any(Number)
		}

		expect(actions[0].payload[0]).toMatchObject(expected)
	});

	test('startSaveNote debe de actualizar la nota', async() => {
		const note = {
			id: "5Fr7fJnkaJdgzm6D0wtg",
			title: "titulo",
			body: "body",
		};

		await store.dispatch(startSaveNote(note))

		const actions = store.getActions();

		expect(actions[0].type).toBe(types.notesUpdated)

		const docRef = await db.doc(
			`/123456/journal/notes/${note.id}`
		).get();


			expect(docRef.data().title).toBe(note.title)


	});
});
