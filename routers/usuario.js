import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";
import aappEncriptar from "./validarEstructura.js";

const appUsuario = Router();
let con = undefined;

appUsuario.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});

//trae toda los autores de la tabla
appUsuario.get("/", (req, res) => {
  con.query(
    /*sql*/ `SELECT nombre,apellido,email FROM usuario`,
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    }
  );
});

export default appUsuario;
