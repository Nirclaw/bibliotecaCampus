import { Router } from "express";
import mysql from "mysql2";
import { CONNECT } from "../config/config.js";
import aappEncriptar from "./validarEstructura.js";
import proxybuscarnombreyapellido from "../middleware/prestamos/proxyBuscarpornombre.js";

const appReserva = Router();
let con = undefined;

appReserva.use((req, res, next) => {
  con = mysql.createPool(CONNECT);
  next();
});

//trae toda los estado libros de la tabla
appReserva.get("/", (req, res) => {
  con.query(
    /*sql*/ `SELECT fecha_prestamo,fecha_devolucion,estado FROM prestamo`,
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    }
  );
});

appReserva.get("/prestados", (req, res) => {
  con.query(
    /*sql*/ `SELECT id_libro,fecha_devolucion FROM prestamo WHERE estado = "Prestado"`,
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    }
  );
});

appReserva.get("/nombre",aappEncriptar ,proxybuscarnombreyapellido,(req, res) => {
  con.query(
    /*sql*/ `select usuario.nombre,apellido,prestamo.id_libro,fecha_prestamo,fecha_prestamo,fecha_devolucion,estado from usuario,prestamo WHERE usuario.id_usuario = prestamo.id_usuario && nombre = ? && apellido = ?;`,
    [req.body.nombre,req.body.apellido],
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    }
  );
});
appReserva.get("/confirmada", (req, res) => {
  con.query(
    /*sql*/ `SELECT reserva.estado,libro.titulo FROM reserva,libro WHERE reserva.id_libro = libro.id_libro && estado="Confirmada"`,
    (err, data) => {
      if (err) {
        res.send(err);
      } else res.send(data);
    }
  );
});

export default appReserva;
