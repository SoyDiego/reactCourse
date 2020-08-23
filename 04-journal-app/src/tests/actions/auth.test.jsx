import { login, logout } from "../../actions/auth";
import { types } from "../../types/types";

describe('Pruebas con las acciones de Auth', () => {
    test('Login y Logout deben crear la accion respectiva ', () => {

        const uid = '123456'
        const displayName= 'Diego'

        const loginActions = login(uid, displayName)
        const logoutActions = logout()

        expect(loginActions).toEqual({
			type: types.login,
			payload: {
				uid,
				displayName,
			},
        });
        
        expect(logoutActions).toEqual({
			type: types.logout,
		});
    });

    test('Debe de realizar el logout', () => {
        
    });
})