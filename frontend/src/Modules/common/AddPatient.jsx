import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddPatientRecord = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    patientId: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    phone: "",
    address: "",
    diagnosis: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post(
        "https://aidly-final-merge.onrender.com/api/patient",
        formData,
      );
      navigate("/patientsuccess");
    } catch (err) {
      console.error(err.response?.data);
      setError("Failed to save patient record");
    }
  };

  return (
    <div
      className="min-h-screen w-full py-10 flex flex-col items-center"
      style={{
        background:
          "linear-gradient(90deg, #d9f0e6 0%, #bfe6dc 50%, #a6ddd2 100%)",
      }}
    >
      <div className="w-full max-w-6xl">
        <div className="bg-[#eeeeee] rounded-2xl py-6 flex items-center justify-center relative shadow-sm">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-6 text-3xl"
          >
            ←
          </button>

          <h2 className="text-4xl font-semibold tracking-wide">
            Add Patient Record
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
                <label>Patient ID :</label>
                <input
                  name="patientId"
                  value={formData.patientId}
                  onChange={handleChange}
                  className="w-full mt-2 px-6 py-3 rounded-full bg-[#d9d9d9]"
                />
              </div>

              <div>
                <label>First Name :</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full mt-2 px-6 py-3 rounded-full bg-[#d9d9d9]"
                />
              </div>

              <div>
                <label>Last Name :</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full mt-2 px-6 py-3 rounded-full bg-[#d9d9d9]"
                />
              </div>

              <div>
                <label>Date of Birth :</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full mt-2 px-6 py-3 rounded-full bg-[#d9d9d9]"
                />
              </div>

              <div>
                <label>Gender :</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full mt-2 px-6 py-3 rounded-full bg-[#d9d9d9]"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label>Phone :</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full mt-2 px-6 py-3 rounded-full bg-[#d9d9d9]"
                />
              </div>
            </div>

            <div>
              <label>Address :</label>
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full mt-2 px-6 py-3 rounded-full bg-[#d9d9d9]"
              />
            </div>

            <div className="w-1/2">
              <label>Diagnosis :</label>
              <input
                name="diagnosis"
                value={formData.diagnosis}
                onChange={handleChange}
                className="w-full mt-2 px-6 py-3 rounded-full bg-[#d9d9d9]"
              />
            </div>

            {error && <p className="text-red-500 text-center">{error}</p>}

            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-[#4CAF50] text-white px-20 py-3 rounded-full"
              >
                Submit Record
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPatientRecord;
