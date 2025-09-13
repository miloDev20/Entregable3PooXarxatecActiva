// src/models/DiscoDuro.ts
import { Disco } from "./Disco.js";
export class DiscoDuro extends Disco {
    contenido;
    constructor(nombre, capacidad, tipo) {
        super();
    }
    girarDisco() {
        console.log("Disco duro girando...");
    }
    leerDatos() {
        console.log("Leyendo datos con cabezal magnético...");
    }
    escribirDatos() {
        console.log("Escribiendo datos con cabezal magnético...");
    }
    introducirDisco() {
        console.log(`Información del disco duro: ${this.nombre}, ${this.capacidad}, ${this.tipoDeDisco}`);
    }
}
//# sourceMappingURL=DiscoDuro.js.map