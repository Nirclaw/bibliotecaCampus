import express from "express";
import { PASSWORD } from "../config/config.js";
import { jwtVerify } from "jose";

const appValiddarToken = express();

appValiddarToken.use(async (req, res,next) => {
  const { authorization } = req.headers;
  if (!authorization)
    return req.status(401).send("Ese token no lo cree yo uwu");
  try {
    const encoder = new TextEncoder();
    const jwtData = await jwtVerify(authorization, encoder.encode(PASSWORD));
    next()
  } catch (error) {
    res.status(401).send({ token: "ese token no existe" });
  }
});

export default appValiddarToken;