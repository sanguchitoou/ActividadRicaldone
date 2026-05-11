//Importamos EXPRESS y todo lo necesario
import express from "express";
import StudentLoginController from "../controllers/StudentLoginController.js";

//Inicializamos el router
const router = express.Router();

//Lo utilizamos
router.route("/").post(StudentLoginController.login);

//Exportamos todo
export default router;
