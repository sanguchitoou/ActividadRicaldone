//Importamos las dependencias para la DATABASE
import mongoose from "mongoose";
import { config } from "./config.js";

//Conectamos
mongoose.connect(config.db.URI);

//Cadena de conexión
const connection = mongoose.connection;

//Creación de métodos
connection.once("open", () => {
  console.log("Conxión exitosa a la DB");
});

connection.on("disconnected", (error) => {
  console.log("No se pudo establecer una conexión hacia la DB: " + error);
});

connection.on("error", (error) => {
  console.log("No se pudo establecer conexión, error desconocido: " + error);
});
