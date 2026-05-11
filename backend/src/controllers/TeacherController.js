//Para CRUD
import TeacherModel from "../models/TeacherModel.js";

//Creamos un arreglo
const teacherController = {};

//Para el GET
teacherController.getTeacher = async (request, response) => {
  try {
    const teacher = await TeacherModel.find();
    //Retornamos 200 si se encontraron datos
    return response.status(200).json(teacher);
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Internal Server Error 500 " + error });
  }
};

//Para el UPDATE
teacherController.updateTeacher = async (request, response) => {
  try {
    //Variables
    const {
      name,
      lastName,
      email,
      password,
      hireDate,
      isActive,
      isVerified,
      loginAttemps,
      timeOut,
    } = request.body;

    //Solicitamos los datos
    await TeacherModel.findByIdAndUpdate(
      request.params.id,
      {
        name,
        lastName,
        email,
        password,
        hireDate,
        isActive,
        isVerified,
        loginAttemps,
        timeOut,
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
teacherController.deleteTeacher = async (request, response) => {
  try {
    await TeacherModel.findByIdAndDelete(request.params.id);
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
export default teacherController;
