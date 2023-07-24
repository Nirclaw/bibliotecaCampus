import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";
import aappEncriptar from "./validarEstructura.js";

const appEstadoLibro = Router();
let con = undefined;

appEstadoLibro.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});

//trae toda los estado libros de la tabla
appEstadoLibro.get("/", (req, res) => {
  con.query(/*sql*/ `SELECT * FROM estado_libro;`, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send(data);
  });
});






export default appEstadoLibro;