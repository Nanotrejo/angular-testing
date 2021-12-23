import { increment } from "./number";


describe('Pruebas de números', () => {
    it('Debe de retornar 100', () => {
        const num = 300;

        const resp = increment(num);

        expect(resp).toBe(100);
    });

    it('Debe de Num + 1 si no es mayor que 100', () => {
        const num = 0;

        const resp = increment(num);

        expect(resp).toBe(num + 1);
    });
});