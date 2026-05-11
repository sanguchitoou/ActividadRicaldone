//IMPORTAMOS
import mongoose, { Schema, model } from "mongoose";

//Campos de la colección
const SpecialitySchema = new Schema(
  {
    specialityName: {
      type: String,
      require: true,
    },
    isAvailable: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  },
);

export default model("Speciality", SpecialitySchema);
