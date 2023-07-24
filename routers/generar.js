import express from "express";
import { PASSWORD } from "../config/config.js";
import { SignJWT } from "jose";

const appGenerar = express();

appGenerar.get("/:id/:nombre", async (req, res) => {
  let json = {
    id: req.params.id,
    nombre: req.params.nombre,
  };
  const encoder = new TextEncoder();
  const jwtconstructor = new SignJWT({ json });
  const jwt = await jwtconstructor
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setExpirationTime("15m")
    .sign(encoder.encode(PASSWORD));

  res.send({ jwt });
});

export default appGenerar;