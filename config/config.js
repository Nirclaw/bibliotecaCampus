
import dotenv from "dotenv";
dotenv.config();

export const CONFIG = JSON.parse(process.env.MY_CONFIG)
export const CONNECT = JSON.parse(process.env.MY_CONNECT);
export const PASSWORD = process.env.PASSWORD