class TresEnRaya {
    constructor() {
        this.tablero = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
        this.jugadorActual = 'X';
        this.jugadasRealizadas = 0;
    }

    imprimirTablero() {
        console.log('\n   0   1   2');
        for (let i = 0; i < 3; i++) {
            let fila = '';
            for (let j = 0; j < 3; j++) {
                fila += ` ${this.tablero[i][j]} `;
                if (j < 2) fila += '|';
            }
            console.log(`${i} ${fila}`);
            if (i < 2) console.log('  ---|---|---');
        }
        console.log('\n');
    }

    hacerJugada(fila, columna) {
        if (fila >= 0 && fila < 3 && columna >= 0 && columna < 3 && this.tablero[fila][columna] === ' ') {
            this.tablero[fila][columna] = this.jugadorActual;
            this.jugadasRealizadas++;
            return true;
        }
        return false;
    }

    cambiarJugador() {
        this.jugadorActual = (this.jugadorActual === 'X') ? 'O' : 'X';
    }

    comprobarGanador() {
        for (let i = 0; i < 3; i++) {
            if (this.tablero[i][0] !== ' ' && this.tablero[i][0] === this.tablero[i][1] && this.tablero[i][0] === this.tablero[i][2]) {
                return this.tablero[i][0];
            }
            if (this.tablero[0][i] !== ' ' && this.tablero[0][i] === this.tablero[1][i] && this.tablero[0][i] === this.tablero[2][i]) {
                return this.tablero[0][i];
            }
        }
        if (this.tablero[0][0] !== ' ' && this.tablero[0][0] === this.tablero[1][1] && this.tablero[0][0] === this.tablero[2][2]) {
            return this.tablero[0][0];
        }
        if (this.tablero[0][2] !== ' ' && this.tablero[0][2] === this.tablero[1][1] && this.tablero[0][2] === this.tablero[2][0]) {
            return this.tablero[0][2];
        }
        return null;
    }

    jugar() {
        console.log('Bienvenidos al juego del Tres en Raya!');
        this.imprimirTablero();

        while (this.jugadasRealizadas < 9) {
            console.log(`Turno del jugador ${this.jugadorActual}`);
            const fila = parseInt(prompt('Ingresa la fila (0, 1 o 2):'));
            const columna = parseInt(prompt('Ingresa la columna (0, 1 o 2):'));

            if (this.hacerJugada(fila, columna)) {
                this.imprimirTablero();

                const ganador = this.comprobarGanador();
                if (ganador) {
                    console.log(`¡El jugador ${ganador} ha ganado!`);
                    break;
                }

                this.cambiarJugador();
            } else {
                console.log('Movimiento no válido. Inténtalo de nuevo.');
            }
        }

        if (this.jugadasRealizadas === 9) {
            console.log('¡Es un empate!');
        }

        console.log('Gracias por jugar.');
    }
}

const juego = new TresEnRaya();
console.log(juego.jugar());