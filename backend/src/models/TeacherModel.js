//IMPORTAMOS
import mongoose, { Schema, model } from "mongoose";

//Campos de la colección
const TeacherSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    hireDate: {
      type: Date,
      require: true,
    },
    isActive: {
      type: Boolean,
      require: true,
    },
    isVerified: {
      type: Boolean,
      require: true,
    },
    loginAttemps: {
      type: Number,
      require: true,
    },
    timeOut: {
      type: Date,
      require: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  },
);

export default model("Teacher", TeacherSchema);
