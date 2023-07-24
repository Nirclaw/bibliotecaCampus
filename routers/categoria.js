import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";
import aappEncriptar from "./validarEstructura.js";

const appCategoria = Router();
let con = undefined;

appCategoria.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});

//trae toda los categoria de la tabla
appCategoria.get("/", (req, res) => {
  con.query(/*sql*/ `SELECT * FROM categoria;`, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send(data);
  });
});






export default appCategoria;