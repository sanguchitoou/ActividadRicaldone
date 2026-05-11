//Para CRUD
import SubjectModel from "../models/SubjectModel.js";

//Creamos un arreglo
const subjectController = {};

//Para el GET
subjectController.getSubject = async (request, response) => {
  try {
    const subject = await SubjectModel.find();
    //Retornamos 200 si se encontraron datos
    return response.status(200).json(subject);
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Internal Server Error 500 " + error });
  }
};

//Para el INSERT
subjectController.insertSubject = async (request, response) => {
  try {
    //Variables
    const { subjectName, idTeacher, isAvailable } = request.body;

    //Guardamos
    const newSubject = new SubjectModel({
      subjectName,
      idTeacher,
      isAvailable,
    });

    //Validamos
    if (!newSubject) {
      return response.status(400).json({
        message:
          "Error al guardar los datos, verifique que todos los datos son proporcionados",
      });
    }

    //Guardamos los datos
    await newSubject.save();

    //Retornamos 200 si se encontraron guardaron los datos
    return response
      .status(200)
      .json({ message: "Datos guardados exitosamente" });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Internal Server Error 500 " + error });
  }
};

//Para el UPDATE
subjectController.updateSubject = async (request, response) => {
  try {
    //Variables
    const { subjectName, idTeacher, isAvailable } = request.body;

    //Solicitamos los datos
    await SubjectModel.findByIdAndUpdate(
      request.params.id,
      {
        subjectName,
        idTeacher,
        isAvailable,
      },
      { new: true },
    );

    //Retornamos 200 si se encontraron guardaron los datos
    return response
      .status(200)
      .json({ message: "Datos actualizados exitosamente" });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Internal Server Error 500 " + error });
  }
};

//Para el DELETE
subjectController.deleteSubject = async (request, response) => {
  try {
    await SubjectModel.findByIdAndDelete(request.params.id);
    //Retornamos 200 si se encontraron datos
    return response
      .status(200)
      .json({ message: "Datos eliminados correctamente" });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Internal Server Error 500 " + error });
  }
};

//Exportamos
export default subjectController;
