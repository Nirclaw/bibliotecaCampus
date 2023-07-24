import { Expose, Transform } from "class-transformer";

export class buscarAutorNombre {
    @Expose({ name: "nombre" })
    @Transform(({ value }) => {
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value))
            return value;
        else throw { status: 400, message: "Error en el nombre" };
    }, { toClassOnly: true })
    nombre: String;

    constructor(ID: string) {
        this.nombre = ID
    }

}