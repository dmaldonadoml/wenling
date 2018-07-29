class Conjunto {
    constructor(...unidades) {
        this.unidades = unidades
    }
    concat(conjunto) {
        return new Conjunto(...this.unidades, ...conjunto.unidades)
    }
    satisface(cantidad, valor) {
        return cantidad === this.unidades.filter(a => a.valor === valor).length
    }
}
module.exports = Conjunto