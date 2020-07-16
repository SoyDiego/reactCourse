import { getGifs } from "../../helpers/getGifs";
require("dotenv").config();

describe("Pruebas con getGifs.jsx (Fetch)", () => {
	test("Debe de traer 10 elementos", async () => {
		const gifs = await getGifs("tsubasa");
		expect(gifs.length).toBe(10);
    });
    
	test("Si hay un string vacio, devuelve 0 elementos", async () => {
		const gifs = await getGifs("");
		expect(gifs.length).toBe(0);
	});
});
