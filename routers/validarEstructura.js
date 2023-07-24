import express from "express";
import { PASSWORD } from "../config/config.js";
import { SignJWT } from "jose";

const aappEncriptar = express();

aappEncriptar.use(async (req, res,next) => {
  
  const encoder = new TextEncoder();
  const jwtconstructor = new SignJWT(req.body);
  const jwt = await jwtconstructor
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setExpirationTime("15m")
    .sign(encoder.encode(PASSWORD));

 req.body = jwt
 next();
});

export default aappEncriptar;