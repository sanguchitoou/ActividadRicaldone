import express from "express";
//IMPORTAMOS TODAS LAS RUTAS QUE SE VAN A UTILIZAR (ENDPOINTS)
import EnrollmentRoute from "./src/routes/EnrollmentRoute.js";
import SpecialityRoute from "./src/routes/SpecialityRoute.js";
import SubjectRoute from "./src/routes/SubjectRoute.js";
import StudentRegisterRoute from "./src/routes/StudentRegisterRoute.js";
import StudenRoute from "./src/routes/StudentRoute.js";
import StudentLoginRoute from "./src/routes/StudentLoginRoute.js";
import StudentPasswordRecoveryRoute from "./src/routes/StudentRecoveryPasswordRoute.js";
import TeacherRegisterRoute from "./src/routes/TeacherRegisterRoute.js";
import TeacherRoute from "./src/routes/TeacherRoute.js";
import TeacherLoginRoute from "./src/routes/TeacherLoginRoute.js";
import TeacherPasswordRecoveryRoute from "./src/routes/TeacherRecoveryPasswordRoute.js";
import LogoutRoute from "./src/routes/LogoutRoute.js";
//NECESARIO PARA LOS CORS Y COOKIES
import cookieParser from "cookie-parser";
import cors from "cors";

//Inicializamos el server
const app = express();

//Usamos cookieparser
app.use(cookieParser());

//Utilizamos CORS
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  }),
);
app.use(express.json());

//CRUDS NORMALES
app.use("/api/enrollment", EnrollmentRoute);
app.use("/api/speciality", SpecialityRoute);
app.use("/api/subject", SubjectRoute);

//CRUD COMPLETO CON REGISTRO, LOGIN Y RECUPERACION DE CONTRASEÑA
//STUDENT
app.use("/api/student/register", StudentRegisterRoute);
app.use("/api/student", StudenRoute);
app.use("/api/student/login", StudentLoginRoute);
app.use("/api/student/recovery", StudentPasswordRecoveryRoute);

//TEACHER
app.use("/api/teacher/register", TeacherRegisterRoute);
app.use("/api/teacher", TeacherRoute);
app.use("/api/teacher/login", TeacherLoginRoute);
app.use("/api/teacher/recovery", TeacherPasswordRecoveryRoute);

//LOGOUT
app.use("/api/logout", LogoutRoute);

export default app;
