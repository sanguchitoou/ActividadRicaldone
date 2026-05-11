//Importamos TODO lo necesario
import dotenv from "dotenv";

//Lo configuramos
dotenv.config();

//Creamos el EXPORT
export const config = {
  db: {
    URI: process.env.DB_URI,
  },
  JWT: {
    SECRET: process.env.JWT_SECRET,
  },
  EMAIL: {
    USER: process.env.EMAIL_USER,
    PASS: process.env.EMAIL_PASS,
  },
};
