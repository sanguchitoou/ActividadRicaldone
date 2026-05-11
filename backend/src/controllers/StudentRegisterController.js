//AQUI VA EL REGISTER, IMPORTS NECESARIOS!
import nodemailer from "nodemailer";
import crypto from "crypto";
import jsonwebtoken from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { config } from "../../config.js";
import StudentModel from "../models/StudentModel.js";

//Arreglo
const studentController = {};

//Función
studentController.registerStudent = async (request, response) => {
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

  try {
    //Verificamos si existe email
    const existsEmail = await StudentModel.findOne({ email });

    //Si existe email, ERROR
    if (existsEmail) {
      return response
        .status(400)
        .json({ message: "Email duplicado, registro existente" });
    }

    //Variables de encriptamiento
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    //Generamos el código
    const verifyCode = crypto.randomBytes(3).toString("hex");

    //Guardamos TODO en un token
    const token = jsonwebtoken.sign(
      {
        verifyCode,
        userType: "Student",
        name,
        lastName,
        email,
        password: hashedPassword,
        birthdate,
        idSpeciality,
        carnet,
        phone,
        isVerified,
        loginAttemps,
        timeOut,
      },
      config.JWT.SECRET,
      { expiresIn: "15m" },
    );

    //Creamos la cookie
    response.cookie("registrationCookie", token, {
      maxAge: 15 * 60 * 1000,
    });

    //Creamos el transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: config.EMAIL.USER,
        pass: config.EMAIL.PASS,
      },
    });

    //Creamos el mailOptions
    const mailOptions = {
      from: config.EMAIL.USER,
      to: email,
      subject: "Registro de cuenta",
      text: `Hola ${name}, tu código de verificación de cuenta es el siguiente: ${verifyCode} recuerda que este código expira en 15 minutos`,
    };

    //Enviamos el correo
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error al enviar el correo, error: " + error);
        return response
          .status(400)
          .json({ message: "Error al enviar el correo, inténtelo denuevo" });
      }
      return response.status(200).json({
        message:
          "El correo se ha enviado exitosamente, verifique su bandeja de entrada",
      });
    });
  } catch (error) {
    //En caso de error
    return response
      .status(500)
      .json({ message: "Internal Server Error 500 " + error });
  }
};

//Creamos el método de verificación de código
studentController.verifyCode = async (request, response) => {
  //Solicitamos el código en una variable
  const { verificationCodeEmail } = request.body;

  //Try catch
  try {
    //Solicitamos el token y lo decodificamos
    const token = request.cookies.registrationCookie;
    const decoded = jsonwebtoken.verify(token, config.JWT.SECRET);

    const {
      verifyCode: storedCode,
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
    } = decoded;

    if (verificationCodeEmail !== storedCode) {
      return response
        .status(400)
        .json({ message: "Código de verificación inválido" });
    }

    //Guardamos TODO
    const newStudent = new StudentModel({
      name,
      lastName,
      email,
      password,
      birthdate,
      idSpeciality,
      carnet,
      phone,
      isVerified: true,
      loginAttemps,
      timeOut,
    });

    await newStudent.save();

    //Limpiamos la cookie
    response.clearCookie("registrationCookie");
    return response
      .status(200)
      .json({ message: "Registro creado exitosamente" });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Internal Server Error 500 " + error });
  }
};

//Exportamos TODO
export default studentController;
