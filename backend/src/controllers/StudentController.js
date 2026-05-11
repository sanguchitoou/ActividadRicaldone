//Para CRUD
import StudentModel from "../models/StudentModel.js";

//Creamos un arreglo
const studentController = {};

//Para el GET
studentController.getStudent = async (request, response) => {
  try {
    const student = await StudentModel.find();
    //Retornamos 200 si se encontraron datos
    return response.status(200).json(student);
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Internal Server Error 500 " + error });
  }
};

//Para el UPDATE
studentController.updateStudent = async (request, response) => {
  try {
    //Variables
    const {
      name,
      lastName,
      email,
      password,
      birthdate,
      idSpeciality,
      carnet,
      phone,
      isVerified,
      loginAttemps,
      timeOut,
    } = request.body;

    //Solicitamos los datos
    await SpecialityModel.findByIdAndUpdate(
      request.params.id,
      {
        name,
        lastName,
        email,
        password,
        birthdate,
        idSpeciality,
        carnet,
        phone,
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
studentController.deleteStudent = async (request, response) => {
  try {
    await StudentModel.findByIdAndDelete(request.params.id);
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
export default studentController;
