import { message } from "./string";


describe('Pruebas de String', () => {
    it('Debe de retornar un String', () => {
        const resp = message('David');

        expect(typeof resp).toBe('string');
    });

    it('Debe de retornar un Hola mundo + nombre', () => {

        const name = 'David';
        const resp = message(name);

        expect(resp).toContain(name);
    });
});