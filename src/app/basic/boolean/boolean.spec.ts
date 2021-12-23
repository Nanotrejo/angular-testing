import { userLogin } from "./boolean";


describe('Pruebas de Boolean', () => {
    it('Debe de retornar un TRUE', () => {
        const resp = userLogin();

        expect(resp).toBeTruthy();
    });
});