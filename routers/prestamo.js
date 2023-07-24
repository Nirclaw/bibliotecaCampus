import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";
import aappEncriptar from "./validarEstructura.js";

const appReserva = Router();
let con = undefined;

appReserva.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});

//trae toda los estado libros de la tabla
appReserva.get("/", (req, res) => {
  con.query(/*sql*/ `SELECT fecha_prestamo,fecha_devolucion,estado FROM prestamo`, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send(data);
  });
});

appReserva.get("/prestados", (req, res) => {
  con.query(/*sql*/ `SELECT id_libro,fecha_devolucion FROM prestamo WHERE estado = "Prestado"`, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send(data);
  });
});





export default appReserva;