//IMPORTAMOS
import mongoose, { Schema, model } from "mongoose";

//Campos de la colección
const StudentSchema = new Schema(
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
    birthdate: {
      type: Date,
      require: true,
    },
    idSpeciality: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Speciality",
      require: true,
    },
    carnet: {
      type: Number,
      require: true,
    },
    phone: {
      type: String,
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

export default model("Student", StudentSchema);
