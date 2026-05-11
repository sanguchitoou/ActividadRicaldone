//Importamos EXPRESS y todo lo necesario
import express from "express";
import StudentRecoveryPasswordController from "../controllers/StudentRecoveryPasswordController.js";

//Inicializamos el router
const router = express.Router();

//Lo utilizamos
router
  .route("/requestCode")
  .post(StudentRecoveryPasswordController.requestCode);
router
  .route("/verifyCode")
  .post(StudentRecoveryPasswordController.verifyCode);
router
  .route("/newPassword")
  .post(StudentRecoveryPasswordController.newPassword);

//Exportamos todo
export default router;
