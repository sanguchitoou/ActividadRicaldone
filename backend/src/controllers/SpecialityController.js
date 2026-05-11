//Para CRUD
import SpecialityModel from "../models/SpecialityModel.js";

//Creamos un arreglo
const specialityController = {};

//Para el GET
specialityController.getSpeciality = async (request, response) => {
  try {
    const speciality = await SpecialityModel.find();
    //Retornamos 200 si se encontraron datos
    return response.status(200).json(speciality);
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Internal Server Error 500 " + error });
  }
};

//Para el INSERT
specialityController.insertSpeciality = async (request, response) => {
  try {
    //Variables
    const { specialityName, isAvailable } = request.body;

    //Guardamos
    const newSpeciality = new SpecialityModel({
      specialityName,
      isAvailable,
    });

    //Validamos
    if (!newSpeciality) {
      return response.status(400).json({
        message:
          "Error al guardar los datos, verifique que todos los datos son proporcionados",
      });
    }

    //Guardamos los datos
    await newSpeciality.save();

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
specialityController.updateSpeciality = async (request, response) => {
  try {
    //Variables
    const { specialityName, isAvailable } = request.body;

    //Solicitamos los datos
    await SpecialityModel.findByIdAndUpdate(
      request.params.id,
      {
        specialityName,
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
specialityController.deleteSpeciality = async (request, response) => {
  try {
    await SpecialityModel.findByIdAndDelete(request.params.id);
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
export default specialityController;
