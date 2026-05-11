//Importamos EXPRESS y todo lo necesario
import express from "express";
import StudentRegisterController from "../controllers/StudentRegisterController.js";

//Inicializamos el router
const router = express.Router();

//Lo utilizamos
router.route("/").post(StudentRegisterController.registerStudent);
router.route("/verifyCode").post(StudentRegisterController.verifyCode);

//Exportamos todo
export default router;
