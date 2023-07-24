import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";
import aappEncriptar from "./validarEstructura.js";

const appEditorial = Router();
let con = undefined;

appEditorial.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});

//trae toda los editorial de la tabla
appEditorial.get("/", (req, res) => {
  con.query(/*sql*/ `SELECT * FROM editorial;`, (err, data) => {
    if (err) {
      res.send(err);
    } else res.send(data);
  });
});






export default appEditorial;