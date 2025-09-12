// src/models/DiscoDuro.ts
import {Disco} from "./Disco.js";

export class DiscoDuro extends Disco {
  private contenido: string;

  constructor(nombre: string, capacidad: string, tipo:string) {
    super(nombre, capacidad, tipo);
  }

  public girarDisco(): void {
    console.log("Disco duro girando...");
  }

  public leerDatos(): void {
    console.log("Leyendo datos con cabezal magnético...");
  }

  public escribirDatos(): void {
    console.log("Escribiendo datos con cabezal magnético...");
  }

  public introducirDisco(): void {
    console.log(`Información del disco duro: ${this.nombre}, ${this.capacidad}, ${this.tipoDeDisco}`);
  }
}
