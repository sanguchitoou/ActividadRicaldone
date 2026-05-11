//Importamos EXPRESS y todo lo necesario
import express from "express";
import SubjectController from "../controllers/SubjectController.js";

//Inicializamos el router
const router = express.Router();

//Lo utilizamos
router
  .route("/")
  .get(SubjectController.getSubject)
  .post(SubjectController.insertSubject);

router
  .route("/:id")
  .put(SubjectController.updateSubject)
  .delete(SubjectController.deleteSubject);

//Exportamos todo
export default router;
