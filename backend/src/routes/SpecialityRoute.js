//Importamos EXPRESS y todo lo necesario
import express from "express";
import SpecialityController from "../controllers/SpecialityController.js";

//Inicializamos el router
const router = express.Router();

//Lo utilizamos
router
  .route("/")
  .get(SpecialityController.getSpeciality)
  .post(SpecialityController.insertSpeciality);

router
  .route("/:id")
  .put(SpecialityController.updateSpeciality)
  .delete(SpecialityController.deleteSpeciality);

//Exportamos todo
export default router;
