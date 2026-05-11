//Importamos EXPRESS y todo lo necesario
import express from "express";
import StudentController from "../controllers/StudentController.js";

//Inicializamos el router
const router = express.Router();

//Lo utilizamos
router.route("/").get(StudentController.getStudent);

router
  .route("/:id")
  .put(StudentController.updateStudent)
  .delete(StudentController.deleteStudent);

//Exportamos todo
export default router;
