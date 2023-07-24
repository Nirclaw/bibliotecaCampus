import "reflect-metadata";
import express from "express";
import { plainToClass } from "class-transformer";
import { jwtVerify } from "jose";
import { PASSWORD } from "../../config/config.js";
import { buscarAutorNombre } from "../../controller/dtoAutor.js";
const proxybuscarAutorNombre = express();

proxybuscarAutorNombre.use(async (req, res, next) => {
  const encoder = new TextEncoder();
  const jwtData = await jwtVerify(req.body, encoder.encode(PASSWORD));
  let comprar = {
    nombre: null,
  };
  let { iat, exp, ...coppia } = jwtData.payload;
  if (
    JSON.stringify(Object.keys(comprar)) === JSON.stringify(Object.keys(coppia))
  ) {
    try {
      req.body = coppia;
      let data = plainToClass(buscarAutorNombre, req.body.nombre, {
        exposeDefaultValues: true,
      });

      req.body.nombre = data;
      next();
    } catch (error) {
      res.status(400).send(error);
    }
  } else res.status(400).send("error en las llaves");
});

export default proxybuscarAutorNombre;