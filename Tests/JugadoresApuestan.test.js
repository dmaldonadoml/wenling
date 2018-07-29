const AssertTruth = x => expect(x).toBeTruthy()
const AssertFalsy = x => expect(x).toBeFalsy()

const Conjunto = require('../Domain/Conjunto')
const Unidad = require('../Domain/Unidad')
const Jugador = require('../Domain/Jugador')
const Ronda = require('../Domain/Ronda')

describe('Jugabilidad', () => {

    it(`como jugador puedo estimar cuántas unidades
        del mismo valor hay en ambos conjuntos`, () => {

        const a = new Conjunto(
            new Unidad(4),
            new Unidad(4),
            new Unidad(4),
            new Unidad(4)
        )
        const b = new Conjunto(
            new Unidad(6),
            new Unidad(6),
            new Unidad(6),
            new Unidad(6)
        )
        const pepe = new Jugador('pepe', a);
        const juan = new Jugador('juan', b);

        const ronda = new Ronda(pepe, juan)

        ronda.estima(pepe, 4, 4)
        
        ronda.estima(juan, 4, 6)

        ronda.destapa(pepe)

        AssertTruth(
            ronda.isGanador(juan)
        )
    })
    
    it(`como jugador puedo estimar cuántas unidades
        del mismo valor hay en ambos conjuntos`, () => {

        const a = new Conjunto(
            new Unidad(5),
            new Unidad(6),
            new Unidad(4),
            new Unidad(4)
        )
        const b = new Conjunto(
            new Unidad(4),
            new Unidad(1),
            new Unidad(6),
            new Unidad(1)
        )
        const pepe = new Jugador('pepe', a);
        const juan = new Jugador('juan', b);

        const ronda = new Ronda(pepe, juan)

        ronda.estima(pepe, 4, 4)
        
        ronda.destapa(juan)

        AssertTruth(
            ronda.isGanador(juan)
        )
    })
    
    it(`como jugador puedo estimar cuántas unidades
        del mismo valor hay en ambos conjuntos`, () => {

        const a = new Conjunto(
            new Unidad(2),
            new Unidad(2),
            new Unidad(2),
            new Unidad(4)
        )
        const b = new Conjunto(
            new Unidad(5),
            new Unidad(5),
            new Unidad(5),
            new Unidad(2)
        )
        const pepe = new Jugador('pepe', a);
        const juan = new Jugador('juan', b);

        const ronda = new Ronda(pepe, juan)

        ronda.estima(pepe, 3, 2)
        ronda.estima(juan, 3, 5)
        ronda.estima(pepe, 4, 2)
        ronda.estima(juan, 4, 5)
        
        ronda.destapa(pepe)

        AssertTruth(
            ronda.isGanador(pepe)
        )
    })
    
    it(`como jugador puedo estimar cuántas unidades
        del mismo valor hay en ambos conjuntos`, () => {

        const a = new Conjunto(
            new Unidad(5),
            new Unidad(5),
            new Unidad(4),
            new Unidad(2),
            new Unidad(2),
            new Unidad(2)
        )
        const b = new Conjunto(
            new Unidad(5),
            new Unidad(5),
            new Unidad(5),
            new Unidad(2),
            new Unidad(2),
            new Unidad(1)
        )
        const pepe = new Jugador('pepe', a);
        const juan = new Jugador('juan', b);

        const ronda = new Ronda(pepe, juan)

        ronda.estima(pepe, 5, 5)
        ronda.estima(juan, 6, 5)
        ronda.estima(pepe, 7, 5)
        
        ronda.destapa(juan)

        AssertTruth(
            ronda.isGanador(juan)
        )
    })
})