import "@testing-library/jest-dom";
const { retornaArreglo } = require("../../bases/07-deses-arr");

describe("Pruebas 07-deses-arr.jsx", () => {
	test("Debe de retornar un string y un numero", () => {
        const [letras, numeros] = retornaArreglo(); //['ABC', 123]
        
        // expect(arr).toEqual(["ABC", 123]);
        expect(letras).toBe('ABC')
        expect(numeros).toBe(123)

        expect(typeof letras).toBe('string')
        expect(typeof numeros).toBe('number')
	});
});
