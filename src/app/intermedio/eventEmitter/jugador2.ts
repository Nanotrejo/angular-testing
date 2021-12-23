import { EventEmitter } from "@angular/core";

export class Jugador2 {
    hp: number;
    hpCambia = new EventEmitter<number>();

    constructor() {
        this.hp = 100;
    }

    herido(value: number) {
        if (value >= this.hp) {
            this.hp = 0;
        } else {
            this.hp = this.hp - value;
        }

        this.hpCambia.emit(this.hp);
    }
}