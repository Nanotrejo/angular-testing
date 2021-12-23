import { Jugador } from './clases';


describe('Pruebas de clases', () => {

    let jugador = new Jugador();

    // beforeAll(() => { console.log('beforeAll'); });
    beforeEach(() => { jugador = new Jugador(); });
    // afterAll(() => { console.log('afterAll'); });
    // afterEach(() => { console.log('afterEach'); });

    it('Debe retornar 80 de HP, recibe 20', () => {
        // const jugador = new Jugador();
        const resp = jugador.herido(20);

        expect(resp).toBe(80);
    });

    it('Debe retornar 50 de HP, recibe 50', () => {
        // const jugador = new Jugador();
        const resp = jugador.herido(50);

        expect(resp).toBe(50);
    });

    it('Debe retornar 0 de HP, recibe 100 + más', () => {
        // const jugador = new Jugador();
        const resp = jugador.herido(100);

        expect(resp).toBe(0);
    });
});