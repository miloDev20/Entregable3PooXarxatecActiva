// src/models/DiscoDuro.ts
import { Disco } from "./Disco.js";
export class CD extends Disco {
    contenido;
    constructor(nombre, capacidad, tipo) {
        super();
    }
    girarDisco() {
        console.log("CD girando...");
    }
    leerDatos() {
        console.log("Leyendo datos con laser...");
    }
    escribirDatos() {
        console.log("Escribiendo datos con laser...");
    }
    introducirDisco() {
        console.log(`Información del cd: ${this.nombre}, ${this.capacidad}, ${this.tipoDeDisco}`);
    }
}
//# sourceMappingURL=CD.js.map