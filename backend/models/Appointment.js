const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  clinicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Clinic",
    required: true
  },

  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true
  },

  doctorId: {
    type: String,
    ref: "Doctor",
    required: true
  },

  // NEW
  appointmentDate: {
    type: Date,
    required: true
  },

  // NEW
  appointmentTime: {
    type: String,
    required: true
  },

  // NEW
  reason: {
    type: String,
    required: true
  },

  tokenNumber: {
    type: Number
  },

  status: {
    type: String,
    enum: ["waiting", "completed", "cancelled"],
    default: "waiting"
  }

}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);