//Creamos el arreglo que almacenará la información de los LOGOUT
const logoutController = {};

logoutController.logout = async (request, response) => {
  //Limpiamos la cookie que contiene la información de quien inicio sesión
  response.clearCookie("authCookie");
  return response.status(200).json({ message: "Sesión cerrada correctamente" });
};

export default logoutController;
