class Jugador {
    constructor(nombre, conjunto) {
        this.nombre = nombre
        this.conjunto = conjunto
    }
    equals(jugador) {
        return jugador.nombre === this.nombre
    }
}
module.exports = Jugador