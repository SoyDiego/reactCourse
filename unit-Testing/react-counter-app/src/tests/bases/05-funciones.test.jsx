import { getUser, getUsuarioActivo } from "../../bases/05-funciones";
import '@testing-library/jest-dom'

describe("Pruebas en 05-funciones.jsx", () => {
	test("getUser() Debe de retornar un objeto", () => {
		const userTest = {
			uid: "ABC123",
			username: "El_Papi1502",
		};

        const user = getUser();
        
        expect(user).toEqual(userTest)
    });
    
    test('getUsuarioActivo() debe de retornar un objeto', () => {
        const nombre = 'Diego'
        
        const activeUserTest = {
			uid: "ABC567",
			username: nombre,
        };

        const activeUser = getUsuarioActivo(nombre)
        
        expect(activeUser).toEqual(activeUserTest)
    });
});
