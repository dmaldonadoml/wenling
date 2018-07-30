const AssertTruth = x => expect(x).toBeTruthy()
const AssertFalsy = x => expect(x).toBeFalsy()
const AssertEquals = (a, b) => expect(a).toEqual(b)
const crearRandomDado = () => new Dado(Math.floor(Math.random()*6+1))

const CrearPartidaCasoDeUso = require('../CasoDeUso/CrearPartidaCasoDeUso')
const InputsPartida = require('../Domain/InputsPartida')

describe('IniciarPartida.test.js', () => {

    it('La partida inicia con 2 oponentes y un juego de dados para cada uno', () => {

        const req = {
            oponentes: [{
                name: 'pepe'
            }, {
                name: 'juan'
            }]
        }

        const inputs = new InputsPartida(req)

        const res = CrearPartidaCasoDeUso().iniciar(inputs)

        AssertEquals(res, {
            estado: {
                name: 'En progreso'
            },
            oponentes: [{
                name: 'pepe',
                dados: [{
                    valor: 1
                }, {
                    valor: 1
                }, {
                    valor: 1
                }]
            }, {
                name: 'juan',
                dados: [{
                    valor: 1
                }, {
                    valor: 1
                }, {
                    valor: 1
                }]
            }]
        })
    })
    
    it('La partida inicia con 2 oponentes y un juego de dados para cada uno', () => {

        const req = {
            oponentes: [{
                name: 'nan'
            },{
                name: 'guille'
            }]
        }

        const inputs = new InputsPartida(req)

        const res = CrearPartidaCasoDeUso().iniciar(inputs)

        AssertEquals(res, {
            estado: {
                name: 'En progreso'
            },
            oponentes: [{
                name: 'nan',
                dados: [{
                    valor: 1
                }, {
                    valor: 1
                }, {
                    valor: 1
                }]
            }, {
                name: 'guille',
                dados: [{
                    valor: 1
                }, {
                    valor: 1
                }, {
                    valor: 1
                }]
            }]
        })
    })
})