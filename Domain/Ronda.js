class Ronda {
    constructor(...jugadores) {
        this.jugadores = jugadores
    }
    isGanador(jugador) {
        return this.ganador.equals(jugador);
    }
    destapa(destapador) {
        const {jugador, cantidad, valor} = this.movimiento

        this.ganador = this.jugadores
            .map(j => j.conjunto)
            .reduce((a, b) => a.concat(b))
            .satisface(cantidad, valor) ? jugador : destapador
    }
    estima(jugador, cantidad, valor) {
        this.movimiento = {
            jugador, cantidad, valor
        }
    }
}
module.exports = Ronda