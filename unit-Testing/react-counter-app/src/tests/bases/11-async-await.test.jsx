import "@testing-library/jest-dom";
import { getImagen } from "../../bases/11-async-await";

describe("Pruebas con async-await y fetch", () => {
	test("Debe de retornar el url de la imagen", async () => {
		const url = await getImagen();
        console.log(url)
		expect(url.includes('https://')).toBe(true);
	});
});
