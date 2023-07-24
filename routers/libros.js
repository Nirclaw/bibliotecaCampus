import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";
import aappEncriptar from "./validarEstructura.js";

const appLibro = Router();
let con = undefined;

appLibro.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});

//trae toda los estado libros de la tabla
appLibro.get("/", (req, res) => {
  con.query(/*sql*/ `SELECT id_autor,titulo,id_editorial FROM libro`, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send(data);
  });
});

appLibro.get("/estado", (req, res) => {
  con.query(/*sql*/ `SELECT id_autor,titulo,id_estado FROM libro`, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send(data);
  });
});





export default appLibro;