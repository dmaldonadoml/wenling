class Partida {
    constructor(oponentes) {
        this.oponentes = oponentes
    }
    asJSON() {
        return {
            estado: {
                name: 'En progreso'
            },
            oponentes: this.oponentes.map(o => o.asJSON())
        }
    }
}

module.exports = Partida