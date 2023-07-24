import express from "express";
import { CONFIG } from "./config/config.js";
const appExpres = express();
appExpres.use(express.json());


import appGenerar from "./routers/generar.js";
import appValiddarToken from "./routers/validartoken.js";
import appAutores from "./routers/autor.js";
import appCategoria from "./routers/categoria.js";
import appEditorial from "./routers/editorial.js";
import appEstadoLibro from "./routers/estadolibro.js";
import appLibro from "./routers/libros.js";
import appPrestamo from "./routers/prestamo.js";
import appReserva from "./routers/prestamo.js";
import appUsuario from "./routers/usuario.js";

appExpres.use("/generateToken", appGenerar); //generador de token


/* appExpres.use("/validarToken",appValiddarToken) */


appExpres.use("/usuario",appValiddarToken,appUsuario); 
appExpres.use("/reserva",appValiddarToken,appReserva);
appExpres.use("/prestamo",appValiddarToken,appPrestamo);
appExpres.use("/libro",appValiddarToken,appLibro);
appExpres.use("/estado-libro",appValiddarToken,appEstadoLibro);
appExpres.use("/editorial",appValiddarToken,appEditorial);
appExpres.use("/categoria",appValiddarToken,appCategoria);
appExpres.use("/autor",appValiddarToken,appAutores);









appExpres.listen(CONFIG, () => {
  console.log(`http://${CONFIG.hostname}:${CONFIG.port}`);
});