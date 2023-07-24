import { Expose, Transform } from "class-transformer";

export class buscarnombreyapellido {
    @Expose({ name: "nombre" })
    @Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    nombre: String;
    @Expose({ name: "apellido" })
    @Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    apellido: String;
    constructor(ID: string, apellido: string) {
        this.nombre = ID
        this.apellido = apellido
    }

}