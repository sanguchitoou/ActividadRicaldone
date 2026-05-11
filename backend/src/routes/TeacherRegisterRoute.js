//Importamos EXPRESS y todo lo necesario
import express from "express";
import TeacherRegisterController from "../controllers/TeacherRegisterController.js";

//Inicializamos el router
const router = express.Router();

//Lo utilizamos
router.route("/").post(TeacherRegisterController.registerTeacher);
router.route("/verifyCode").post(TeacherRegisterController.verifyCode);

//Exportamos todo
export default router;
