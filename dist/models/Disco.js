export class Disco {
    #nombre;
    #capacidad;
    #tipoDeDisco;
    constructor(nuevoNombre, nuevaCapacidad, nuevoTipo) {
        this.#nombre = nuevoNombre;
        this.#capacidad = nuevaCapacidad;
        this.#tipoDeDisco = nuevoTipo;
    }
    get nombre() {
        return this.#nombre;
    }
    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }
    get capacidad() {
        return this.#capacidad;
    }
    get tipoDeDisco() {
        return this.#tipoDeDisco;
    }
}
//# sourceMappingURL=Disco.js.map