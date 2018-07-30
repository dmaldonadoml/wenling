class Dados {
    constructor(...dados) {
        this.dados = dados
    }
    asJSON() {
        return this.dados.map(dado => dado.asJSON())
    }
}

module.exports = Dados