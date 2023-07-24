import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";
import aappEncriptar from "./validarEstructura.js";

const appPrestamo = Router();
let con = undefined;

appPrestamo.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});

//trae toda los estado libros de la tabla
appPrestamo.get("/", (req, res) => {
  con.query(/*sql*/ `SELECT fecha_reserva,estado FROM reserva`, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send(data);
  });
});

export default appPrestamo;
