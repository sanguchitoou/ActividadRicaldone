//Importamos EXPRESS y todo lo necesario
import express from "express";
import EnrollmentController from "../controllers/EnrollmentController.js";

//Inicializamos el router
const router = express.Router();

//Lo utilizamos
router
  .route("/")
  .get(EnrollmentController.getEnrollment)
  .post(EnrollmentController.insetEnrollment);

router
  .route("/:id")
  .put(EnrollmentController.updateEnrollment)
  .delete(EnrollmentController.deleteEnrollment);

//Exportamos todo
export default router;
