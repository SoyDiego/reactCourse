import "@testing-library/jest-dom";
import { getSaludo } from "../../bases/02-template-string";

describe("Pruebas en 02-template-string.jsx", () => {
	test("getSaludo debe de retornar Hola Diego", () => {
		const nombre = "Diego";

		const saludo = getSaludo(nombre);

		expect(saludo).toBe(`Hola ${nombre}!`);
	});

	//getSaludo debe retornar Hola Carlos! si no hay argumento nombre.

	test("Debe retonar Hola Carlos! si no hay argumento NOMBRE", () => {
		const saludo = getSaludo();
		expect(saludo).toBe(`Hola Carlos!`);
	});
});
