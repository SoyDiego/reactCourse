import { getHeroeByIdAsync } from "../../bases/09-promesas";
import "@testing-library/jest-dom";
import heroes from "../../data/heroes";

describe("Pruebas con Promesas", () => {
	test("Debe retornar un héroe async", (done) => {
		const id = 1;
		getHeroeByIdAsync(id).then((heroe) => {
			expect(heroe).toBe(heroes[0]);
			done();
		});
	});

	test("Debe retornar un error si el heroe por id no existe ", (done) => {
		const id = 10;
		getHeroeByIdAsync(id).catch((error) => {
            expect(error).toBe("No se pudo encontrar el héroe");
            done()
		});
	});
});
