const Appointment = require("../models/Appointment");
const Doctor = require("../models/Doctor");
const mongoose = require("mongoose");

exports.createAppointment = async (req, res) => {
  try {

    const {
      clinicId,
      patientId,
      doctorId,
      appointmentDate,
      appointmentTime,
      reason
    } = req.body;

    if (
      !clinicId ||
      !patientId ||
      !doctorId ||
      !appointmentDate ||
      !appointmentTime ||
      !reason
    ) {
      return res.status(400).json({
        message: "Missing required fields"
      });
    }

    if (!mongoose.Types.ObjectId.isValid(clinicId)) {
      return res.status(400).json({
        message: "Invalid clinicId"
      });
    }

    const doctor = await Doctor.findOne({ doctorId });

    if (!doctor || doctor.clinicId.toString() !== clinicId) {
      return res.status(400).json({
        message: "Doctor does not belong to this clinic"
      });
    }

    const startOfDay = new Date(appointmentDate);
    startOfDay.setHours(0,0,0,0);

    const endOfDay = new Date(startOfDay);
    endOfDay.setHours(23,59,59,999);

    const existingClinicBooking = await Appointment.findOne({
      doctorId,
      clinicId: { $ne: clinicId },
      appointmentDate: {
        $gte: startOfDay,
        $lte: endOfDay
      }
    });

    if (existingClinicBooking) {
      return res.status(400).json({
        message: "Doctor already assigned to another clinic on this date."
      });
    }

    const count = await Appointment.countDocuments({
      doctorId,
      appointmentDate: {
        $gte: startOfDay,
        $lte: endOfDay
      }
    });

    const appointment = new Appointment({
      clinicId,
      patientId,
      doctorId,
      appointmentDate,
      appointmentTime,
      reason,
      tokenNumber: count + 1
    });

    await appointment.save();

    res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      appointment
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};


// ✅ Get Doctor Appointments
exports.getDoctorAppointments = async (req, res) => {
  try {
    const { doctorId } = req.params;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

   const appointments = await Appointment.find({
  doctorId
})
.populate("patientId","firstName lastName phone gender dateOfBirth")
.sort({
  appointmentDate:1,
  tokenNumber:1
});

    res.status(200).json(appointments);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ✅ Get Clinic Appointments
exports.getClinicAppointments = async (req, res) => {
  try {
    const { clinicId } = req.params;


   const appointments = await Appointment.find({
    clinicId
})
.populate(
  "patientId",
  "patientId firstName lastName phone gender dateOfBirth"
)
.sort({
    appointmentDate:1,
    tokenNumber:1
});

    res.json({
      success: true,
      data: appointments
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};