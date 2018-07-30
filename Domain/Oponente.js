class Oponente {
    constructor(name) {
        this.name = name
    }
    tomar(dados) {
        this.dados = dados
        return this
    }
    asJSON() {
        return {
            name: this.name,
            dados: this.dados.asJSON()
        }
    }
}

module.exports = Oponente