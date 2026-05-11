//Para CRUD
import EnrollmentModel from "../models/EnrollmentModel.js";

//Creamos un arreglo
const enrollmentController = {};

//Para el GET
enrollmentController.getEnrollment = async (request, response) => {
  try {
    const enrollment = await EnrollmentModel.find();
    //Retornamos 200 si se encontraron datos
    return response.status(200).json(enrollment);
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Internal Server Error 500 " + error });
  }
};

//Para el INSERT
enrollmentController.insetEnrollment = async (request, response) => {
  try {
    //Variables
    const { idStudent, amount, paymentDate, method, status, referenceNumber } =
      request.body;

    //Guardamos
    const newEnrollment = new EnrollmentModel({
      idStudent,
      amount,
      paymentDate,
      method,
      status,
      referenceNumber,
    });

    //Validamos
    if (!newEnrollment) {
      return response.status(400).json({
        message:
          "Error al guardar los datos, verifique que todos los datos son proporcionados",
      });
    }

    //Guardamos los datos
    await newEnrollment.save();

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
enrollmentController.updateEnrollment = async (request, response) => {
  try {
    //Variables
    const { idStudent, amount, paymentDate, method, status, referenceNumber } =
      request.body;

    //Solicitamos los datos
    await EnrollmentModel.findByIdAndUpdate(
      request.params.id,
      {
        idStudent,
        amount,
        paymentDate,
        method,
        status,
        referenceNumber,
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
enrollmentController.deleteEnrollment = async (request, response) => {
  try {
    await EnrollmentModel.findByIdAndDelete(request.params.id);
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
export default enrollmentController;
