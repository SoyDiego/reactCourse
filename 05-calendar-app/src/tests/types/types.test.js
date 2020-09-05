import { types } from "../../types/types"

describe("Pruebas en Types", () => {
    test('Los Types deben de ser iguales ', () => {
        expect(types).toEqual({
			uiOpenModal: "[UI] Open Modal",
			uiCloseModal: "[UI] Close Modal",

			eventSetActive: "[Events] SetActive",
			eventLogout: "[Events] Clean",

			eventStartAddNew: "[Events] Start Add New",
			eventAddNew: "[Events] Added New Event",
			eventClearActiveEvent: "[Events] Clear Active Event",
			eventUpdated: "[Events] Event Updated",
			eventDeleted: "[Events] Event Deleted",
			eventLoaded: "[Events] Loaded",

			authCheckingFinish: "[Auth] Checking finish state",
			authStartLogin: "[Auth] Start login",
			authLogin: "[Auth] Logged",
			authStartRegister: "[Auth] Start Register",
			authStartTokenRenew: "[Auth] Start Token Renew",
			authLogout: "[Auth] Logout",
		});
    });
});
