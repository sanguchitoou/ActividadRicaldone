//IMPORTAMOS
import mongoose, { Schema, model } from "mongoose";

//Campos de la colección
const EnrollmentSchema = new Schema(
  {
    idStudent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      require: true,
    },
    amount: {
      type: Number,
      require: true,
    },
    paymentDate: {
      type: Date,
      require: true,
    },
    method: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      require: true,
    },
    referenceNumber: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  },
);

export default model("Enrollment", EnrollmentSchema);
