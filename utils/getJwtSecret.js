import dotenv from "dotenv";
import e from "cors";
dotenv.config();

//Convert secret into Unit8Array
export const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);