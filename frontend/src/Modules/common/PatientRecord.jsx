import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewPatients = () => {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const res = await axios.get(
        "https://aidly-final-merge.onrender.com/api/patient",
      );
      setPatients(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredPatients = patients.filter(
    (patient) =>
      (patient.firstName?.toLowerCase() || "").includes(search.toLowerCase()) ||
      (patient.patientId?.toLowerCase() || "").includes(search.toLowerCase()),
  );

  return (
    <div
      className="min-h-screen w-full py-8 flex flex-col items-center"
      style={{
        background:
          "linear-gradient(90deg, #d9f0e6 0%, #bfe6dc 50%, #a6ddd2 100%)",
      }}
    >
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="bg-[#eeeeee] rounded-2xl py-5 flex items-center justify-center relative shadow-sm">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-6 text-3xl"
          >
            ←
          </button>

          <h2 className="text-3xl font-semibold">Patients Record</h2>
        </div>

        {/* Green Strip */}
        <div className="h-3 bg-[#1A5F48] rounded-b-xl"></div>

        {/* Search Section */}
        <div className="bg-[#f5f5f5] p-6 rounded-xl mt-6 flex justify-center items-center gap-4 shadow-sm">
          <input
            type="text"
            placeholder="Search by Name or Id"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-6 py-2 rounded-full bg-gray-300 outline-none w-80"
          />

          <button
            type="button"
            className="bg-blue-600 text-white px-6 py-2 rounded-full"
          >
            Search
          </button>

          <button
            type="button"
            className="bg-green-500 text-white px-6 py-2 rounded-full"
          >
            Edit
          </button>
          <button
            onClick={() => navigate("/addpatient")}
            className="bg-green-500 text-white px-6 py-2 rounded-full"
          >
            Add New
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl mt-6 overflow-hidden shadow-md">
          <table className="w-full text-sm">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="p-3 text-left">Patient ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Lastname</th>
                <th className="p-3 text-left">DateofBirth</th>
                <th className="p-3 text-left">Gender</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Address</th>
                <th className="p-3 text-left">Current Diagnosis</th>
              </tr>
            </thead>

            <tbody>
              {filteredPatients.map((patient, index) => (
                <tr
                  key={patient._id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } border-b`}
                >
                  <td className="p-3">{patient.patientId}</td>
                  <td className="p-3">{patient.firstName}</td>
                  <td className="p-3">{patient.lastName}</td>
                  <td className="p-3">
                    {new Date(patient.dateOfBirth).toLocaleDateString()}
                  </td>
                  <td className="p-3">{patient.gender}</td>
                  <td className="p-3">{patient.phone}</td>
                  <td className="p-3">{patient.address}</td>
                  <td className="p-3">{patient.diagnosis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewPatients;
