import { Jugador2 } from "./jugador2";


describe('Pruebas Jugador 2 Emit', () => {
    let jugador: Jugador2;

    beforeEach(() => jugador = new Jugador2());

    it('Debe emitir un evento cuando recibe daño', () => {

        let newHp = 0;

        jugador.hpCambia.subscribe(hp => {
            newHp = hp;
        });

        jugador.herido(1000);

        expect(newHp).toBe(0);
    });

    it('Debe emitir un evento cuando recibe daño y sobrevivir', () => {

        let newHp = 0;

        jugador.hpCambia.subscribe(hp => {
            newHp = hp;
        });

        jugador.herido(50);

        expect(newHp).toBe(50);
    });
});