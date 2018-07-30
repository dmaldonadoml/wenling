class InputsPartida {
    constructor(inputs) {
        this.inputs = inputs
    }
    oponentes(cb) {
        return this.inputs.oponentes.map(cb);
    }
}
module.exports = InputsPartida