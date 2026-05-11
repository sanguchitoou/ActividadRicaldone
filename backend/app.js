import express from "express";
//IMPORTAMOS TODAS LAS RUTAS QUE SE VAN A UTILIZAR (ENDPOINTS)

import cookieParser from "cookie-parser";
import cors from "cors";

//Inicializamos el server
const app = express();

//Usamos cookieparser
app.use(cookieParser());

//Utilizamos CORS
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  }),
);
app.use(express.json());

//CRUDS
//app.use("/api/loquees", ruta);

export default app;
