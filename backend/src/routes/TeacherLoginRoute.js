//Importamos EXPRESS y todo lo necesario
import express from "express";
import TeacherLoginController from "../controllers/TeacherLoginController.js";

//Inicializamos el router
const router = express.Router();
/*
//Lo utilizamos
router.route("/").post(TeacherLoginController);
*/
//Exportamos todo
export default router;
