
import {Disco} from "./Disco.js";

export class CD extends Disco {
  private contenido: string;

  constructor(nombre: string, capacidad: string, tipo:string) {
    super(nombre, capacidad, tipo);
  }

  public girarDisco(): void {
    console.log("CD girando...");
  }

  public leerDatos(): void {
    console.log("Leyendo datos con laser...");
  }

  public escribirDatos(): void {
    console.log("Escribiendo datos con laser...");
  }

  public introducirDisco(): void {
    console.log(`Información del cd: ${this.nombre}, ${this.capacidad}, ${this.tipoDeDisco}`);
  }
}
