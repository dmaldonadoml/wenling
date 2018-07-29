const AssertTruth = x => expect(x).toBeTruthy()
const AssertFalsy = x => expect(x).toBeFalsy()

const Conjunto = require('../Domain/Conjunto')
const Unidad = require('../Domain/Unidad')
const Jugador = require('../Domain/Jugador')
const Ronda = require('../Domain/Ronda')

describe('Apuestas.test.js', () => {

    it('should pass', () => AssertTruth(1))
})