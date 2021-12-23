import { getRobots } from "./arreglo";


describe('Prueba de arreglos', () => {
    it('Debe de retornar 3 robots', () => {
        const resp = getRobots();

        expect(resp.length).toBeGreaterThanOrEqual(3);
    });

    it('Debe existir Iron Man', () => {
        const resp = getRobots();

        expect(resp).toContain('Iron Man');
        expect(resp).toContain('Thor');
    });
});