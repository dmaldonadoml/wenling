const Partida = require('../Domain/Partida')
const Oponente = require('../Domain/Oponente')
const Dados = require('../Domain/Dados')
const Dado = require('../Domain/Dado')

const CrearPartidaCasoDeUso = () => ({
    iniciar(inputs) {
        
        const oponentes = inputs.oponentes(({name}) => {
            
            return new Oponente(name)
            .tomar(
                new Dados(new Dado(), new Dado(), new Dado())
            )
        })

        return new Partida(oponentes).asJSON()
    }
})

module.exports = CrearPartidaCasoDeUso