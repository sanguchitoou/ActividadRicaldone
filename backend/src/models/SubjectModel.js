//IMPORTAMOS
import mongoose, { Schema, model } from "mongoose";

//Campos de la colección
const SubjectSchema = new Schema(
  {
    subjectName: {
      type: String,
      require: true,
    },
    idTeacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
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

export default model("Subject", SubjectSchema);
