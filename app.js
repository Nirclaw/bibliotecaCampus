import express from "express";
import { CONFIG } from "./config/config.js";
const appExpres = express();
appExpres.use(express.json());


import appGenerar from "./routers/generar.js";
import appValiddarToken from "./routers/validartoken.js";
import appAutores from "./routers/autor.js";
import appCategoria from "./routers/categoria.js";
import appEditorial from "./routers/editorial.js";

appExpres.use("/generateToken", appGenerar); //generador de token


/* appExpres.use("/validarToken",appValiddarToken) */

/* appExpres.use("/usuario");  */
/* appExpres.use("/categoria"); 
appExpres.use("/libro");
appExpres.use("/prestamo");
appExpres.use("/reserva");*/

appExpres.use("/estado-libro",appEstadoLibro);
appExpres.use("/editorial",appEditorial);
appExpres.use("/categoria",appCategoria);
appExpres.use("/autor",appAutores);









appExpres.listen(CONFIG, () => {
  console.log(`http://${CONFIG.hostname}:${CONFIG.port}`);
});