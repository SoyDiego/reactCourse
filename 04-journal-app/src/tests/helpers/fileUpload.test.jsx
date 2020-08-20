import cloudinary from "cloudinary";
import "@testing-library/jest-dom";
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
	cloud_name: "dilnenszo",
	api_key: "753512648169294",
	api_secret: "6S_BC11NzQEtiNRlP15BAjEDP40",
});

describe("Pruebas en fileUpload", () => {
	test("Debe de cargar un archivo y retonar el URL ", async (done) => {
		const resp = await fetch(
			"https://ichef.bbci.co.uk/news/320/cpsprodpb/15665/production/_107435678_perro1.jpg"
		);

		const blob = await resp.blob();

		const file = new File([blob], "foto.jpg");

		const url = await fileUpload(file);

		expect(typeof url).toBe("string");

		//Borrar imagen por ID

		const segments = url.split("/");
		const imageId = segments[segments.length - 1].replace(".jpg", "");

		cloudinary.v2.api.delete_resources(imageId, {}, () => {
			done();
		});
	});

	test("Debe de retornar un error", async () => {
		const file = new File([], "foto.jpg");
		const url = await fileUpload(file);

		expect(url).toBe(null);
	});
});
