//Importamos las librerías necesarias para realizar un login exitoso
import jsonwebtoken from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { config } from "../../config.js";
import StudentModel from "../models/StudentModel.js";

//Creamos un array de métodos DENTRO de la carpeta controlador
const studentLoginController = {};

//Realizamos la función para la realización del login
studentLoginController.login = async (request, response) => {
  //Solicitamos los datos
  const { email, password } = request.body;

  //Validamos el formato del código
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //Comparamos
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: "Correo inválido" });
  }

  try {
    //Buscamos el correo electrónico en la base de datos
    const studentFound = await StudentModel.findOne({ email });

    //Si no existe el correo en la base de datos
    if (!studentFound) {
      return response.status(400).json({ message: "Email no encontrado " });
    }

    //Verificamos si el usuario no está bloqueado dentro de la aplicación
    if (studentFound.loginAttemps && studentFound.timeOut > Date.now) {
      return response
        .status(400)
        .json({ message: "Usuario bloqueado temporalmente" });
    }

    //Validamos la contraseña
    const isMatch = await bcryptjs.compare(password, studentFound.password);

    if (!isMatch) {
      //Si la contraseña no coincide, incrementamos los intentos de inicio de sesión
      studentFound.loginAttemps = (studentFound.loginAttemps || 0) + 1;

      if (studentFound.loginAttemps >= 3) {
        //Si se alcanzan los 5 intentos, bloqueamos al usuario durante 15 minutos
        studentFound.timeOut = new Date(Date.now() + 15 * 60 * 1000);
        studentFound.loginAttemps = 0;

        await studentFound.save();
        return response
          .status(403)
          .json({ message: "Usuario bloqueado temporalmente" });
      }

      //Guardamos el número de intentos de inicio de sesión en la base de datos
      await studentFound.save();
      return response.status(400).json({ message: "Contraseña incorrecta" });
    }

    //Reseteamos los intentos de inicio de sesión y el tiempo de bloqueo si la contraseña es correcta
    studentFound.loginAttemps = 0;
    studentFound.timeOut = null;

    //Generamos el token JWT
    const token = jsonwebtoken.sign(
      { id: studentFound._id, userType: "Student" },
      config.JWT.SECRET,
      { expiresIn: "30d" },
    );

    //Guardamos el token en la cookie del cliente
    response.cookie("authCookie", token);

    //Devolvemos la respuesta del login
    return response.status(200).json({ message: "Login exitoso", token });
  } catch (error) {
    //En caso de error
    return response
      .status(500)
      .json({ message: "Internal Server Error 500 " + error });
  }
};

export default studentLoginController;
