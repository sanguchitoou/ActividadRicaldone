//Importamos EXPRESS y todo lo necesario
import express from "express";
import LogoutController from "../controllers/LogoutController.js";

//Inicializamos el router
const router = express.Router();

//Lo utilizamos
router.route("/").post(LogoutController.logout);

//Exportamos todo
export default router;
