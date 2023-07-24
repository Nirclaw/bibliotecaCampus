import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";
import aappEncriptar from "./validarEstructura.js";
import proxybuscarAutorNombre from "../middleware/autor/proxyBuscarnombre.js";


const appAutores = Router();
let con = undefined;

appAutores.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});

//trae toda los autores de la tabla
appAutores.get("/", (req, res) => {
  con.query(/*sql*/ `SELECT * FROM autor;`, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send(data);
  });
});
appAutores.get("/nombre",aappEncriptar,proxybuscarAutorNombre, (req, res) => {
  con.query(
    /*sql*/ `SELECT * FROM autor WHERE nombre = ?;`,
    req.body.nombre,
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    }
  );
});

export default appAutores;
