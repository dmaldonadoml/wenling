const AssertTruth = x => expect(x).toBeTruthy()
const AssertFalsy = x => expect(x).toBeFalsy()

const Conjunto = require('../Domain/Conjunto')
const Unidad = require('../Domain/Unidad')

describe('', () => {

    it('no debe satisfacer', () => {

        const conjunto = new Conjunto(
            new Unidad(4),
            new Unidad(4),
            new Unidad(3),
            new Unidad(2),
            new Unidad(6),
            new Unidad(6),
            new Unidad(6),
            new Unidad(2)
        )
        AssertFalsy(
            conjunto.satisface(3, 4)
        )
    })
    
    it('debe satisfacer', () => {

        const conjunto = new Conjunto(
            new Unidad(4),
            new Unidad(4),
            new Unidad(3),
            new Unidad(2),
            new Unidad(6),
            new Unidad(6),
            new Unidad(6),
            new Unidad(2)
        )
        AssertTruth(
            conjunto.satisface(3, 6)
        )
    })
    
    it('no debe satisfacer', () => {

        const conjunto = new Conjunto(
            new Unidad(2),
            new Unidad(2),
            new Unidad(3),
            new Unidad(1),
            new Unidad(6),
            new Unidad(6),
            new Unidad(6),
            new Unidad(2)
        )
        AssertFalsy(
            conjunto.satisface(4, 2)
        )
    })
})