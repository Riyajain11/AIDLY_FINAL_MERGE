import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../service/api";

const BookAppointment = () => {
const navigate = useNavigate();

const clinicId = localStorage.getItem("clinicId");

const [patients, setPatients] = useState([]);
const [doctors, setDoctors] = useState([]);
const [error, setError] = useState("");
const [success, setSuccess] = useState("");

const [formData, setFormData] = useState({
patientId: "",
doctorId: "",
appointmentDate: "",
appointmentTime: "",
reason: "",
});

useEffect(() => {
fetchPatients();
fetchDoctors();
}, []);

const fetchPatients = async () => {
try {
const res = await api.get("/patient");
setPatients(res.data);
} catch (err) {
console.error(err);
}
};

const fetchDoctors = async () => {
try {
const res = await api.get(`/clinic/doctor/${clinicId}`);
setDoctors(res.data.data || []);
} catch (err) {
console.error(err);
}
};

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();

setError("");
setSuccess("");

try {
  await api.post("/appointments", {
    clinicId,
    patientId: formData.patientId,
    doctorId: formData.doctorId,
    appointmentDate: formData.appointmentDate,
    appointmentTime: formData.appointmentTime,
    reason: formData.reason,
  });

  setSuccess("Appointment booked successfully");

  setFormData({
    patientId: "",
    doctorId: "",
    appointmentDate: "",
    appointmentTime: "",
    reason: "",
  });

  setTimeout(() => {
    navigate("/dashboard/receptionist");
  }, 1500);

} catch (err) {
  console.error(err);
  setError(
    err?.response?.data?.message ||
    "Failed to book appointment"
  );
}


};

return (
<div
className="min-h-screen w-full py-10 flex flex-col items-center"
style={{
background:
"linear-gradient(90deg, #d9f0e6 0%, #bfe6dc 50%, #a6ddd2 100%)",
}}
> <div className="w-full max-w-6xl">

    <div className="bg-[#eeeeee] rounded-2xl py-6 flex items-center justify-center relative shadow-sm">
      <button
        onClick={() => navigate(-1)}
        className="absolute left-6 text-3xl"
      >
        ←
      </button>

      <h2 className="text-4xl font-semibold tracking-wide">
        Book Appointment
      </h2>
    </div>

    <div className="h-8"></div>

    <div
      className="rounded-3xl p-12"
      style={{
        background:
          "linear-gradient(135deg, #e3f4ef 0%, #cdebe4 50%, #b7e1da 100%)",
      }}
    >
      <form onSubmit={handleSubmit} className="space-y-8">

        <div className="grid grid-cols-2 gap-12">

          <div>
            <label>Patient :</label>

            <select
              name="patientId"
              value={formData.patientId}
              onChange={handleChange}
              className="w-full mt-2 px-6 py-3 rounded-full bg-[#d9d9d9]"
            >
              <option value="">Select Patient</option>

              {patients.map((patient) => (
                <option
                  key={patient._id}
                  value={patient._id}
                >
                  {patient.firstName} {patient.lastName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Doctor :</label>

            <select
              name="doctorId"
              value={formData.doctorId}
              onChange={handleChange}
              className="w-full mt-2 px-6 py-3 rounded-full bg-[#d9d9d9]"
            >
              <option value="">Select Doctor</option>

              {doctors.map((doctor) => (
                <option
                  key={doctor._id}
                  value={doctor.doctorId}
                >
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Appointment Date :</label>

            <input
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              className="w-full mt-2 px-6 py-3 rounded-full bg-[#d9d9d9]"
            />
          </div>

          <div>
            <label>Appointment Time :</label>

            <input
              type="time"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              className="w-full mt-2 px-6 py-3 rounded-full bg-[#d9d9d9]"
            />
          </div>
        </div>

        <div>
          <label>Reason :</label>

          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            rows="4"
            className="w-full mt-2 px-6 py-4 rounded-3xl bg-[#d9d9d9]"
          />
        </div>

        {error && (
          <p className="text-red-500 text-center">
            {error}
          </p>
        )}

        {success && (
          <p className="text-green-600 text-center">
            {success}
          </p>
        )}

        <div className="flex justify-center pt-6">
          <button
            type="submit"
            className="bg-[#4CAF50] text-white px-20 py-3 rounded-full"
          >
            Book Appointment
          </button>
        </div>

      </form>
    </div>
  </div>
</div>


);
};

export default BookAppointment;
