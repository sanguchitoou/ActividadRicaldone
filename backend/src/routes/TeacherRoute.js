//Importamos EXPRESS y todo lo necesario
import express from "express";
import TeacherController from "../controllers/TeacherController.js";

//Inicializamos el router
const router = express.Router();

//Lo utilizamos
router.route("/").get(TeacherController.getTeacher);

router
  .route("/:id")
  .put(TeacherController.updateTeacher)
  .delete(TeacherController.deleteTeacher);

//Exportamos todo
export default router;
