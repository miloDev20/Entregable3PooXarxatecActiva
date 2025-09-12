export abstract class Disco {
    #nombre: string
    #capacidad: string
    #tipoDeDisco: string
    constructor(nuevoNombre:string, nuevaCapacidad:string, nuevoTipo: string) {
        this.#nombre= nuevoNombre;
        this.#capacidad= nuevaCapacidad
        this.#tipoDeDisco= nuevoTipo
    }
    get nombre():string{
        return this.#nombre;
    }

    set nombre(nuevoNombre: string){
        this.#nombre = nuevoNombre;
    }

    get capacidad():string{
        return this.#capacidad;
    }

    get tipoDeDisco():string{
        return this.#tipoDeDisco;
    }

    abstract girarDisco(): void;
    abstract leerDatos(): void;
    abstract escribirDatos(): void;
    abstract introducirDisco():void;



}