export class Jugador {
    hp: number;

    constructor() {
        this.hp = 100;
    }

    herido(value: number) {
        if (value >= this.hp) {
            this.hp = 0;
        } else {
            this.hp = this.hp - value;
        }

        return this.hp;
    }
}