//Importamos EXPRESS y todo lo necesario
import express from "express";
import TeacherRecoveryPasswordController from "../controllers/TeacherRecoveryPasswordController.js";

//Inicializamos el router
const router = express.Router();

//Lo utilizamos
router
  .route("/requestCode")
  .post(TeacherRecoveryPasswordController.requestCode);
router
  .route("/verifyCode")
  .post(TeacherRecoveryPasswordController.verifyCode);
router
  .route("/newPassword")
  .post(TeacherRecoveryPasswordController.newPassword);

//Exportamos todo
export default router;
