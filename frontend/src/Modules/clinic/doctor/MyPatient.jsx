import React, { useState, useEffect } from "react";
import axios from "axios";
import { ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const statusColor = {
  Admitted: "bg-green-100 text-green-700",
  "In Treatment": "bg-teal-100 text-teal-700",
  Recovering: "bg-green-200 text-green-700",
  "Under Observation": "bg-cyan-100 text-cyan-700",
  Discharged: "bg-gray-200 text-gray-600",
};

export default function MyPatients() {
  const [patients, setPatients] = useState([]);
  const [search, setsearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const rowsPerPage = 10;

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const res = await axios.get(
  "https://aidly-final-merge.onrender.com/api/patient"
);
      setPatients(res.data.data || res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const FilterPatients = patients.filter(
    (p) =>
      (p.firstName?.toLowerCase() || "").includes(search.toLowerCase()) ||
      (p.patientId?.toLowerCase() || "").includes(search.toLowerCase()) ||
      (p.phone?.toLowerCase() || "").includes(search.toLowerCase()) ||
      (p.gender?.toLowerCase() || "").includes(search.toLowerCase())
  );

  // pagination logic
  const totalPages = Math.ceil(FilterPatients.length / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const visiblePatients = FilterPatients.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#7ab5b1] to-[#b8e2df]">
      <div className="bg-white p-6 mb-2 rounded-b-4xl">
        <div className="flex items-center justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0"
          >
            <ArrowLeft
              className="cursor-pointer hover:text-teal-600"
              size={28}
            />
          </button>

          <h1 className="text-3xl font-bold">My Patients</h1>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-6 max-w-7xl mx-auto">
        {/* Search */}
        <div className="flex items-center border rounded-lg px-3 py-2 w-full md:w-96 mb-4">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, phone, or ID..."
            className="outline-none ml-2 w-full"
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-3">Patient Name</th>
                <th className="p-3">Phone / ID</th>
                <th className="p-3">Gender</th>
                <th className="p-3">Last Visit</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {visiblePatients.map((p, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3">
                    <div className="font-semibold">
                      {p.firstName} {p.lastName}
                    </div>
                    <div className="text-sm text-gray-400">
                      {p.patientId}
                    </div>
                  </td>

                  <td className="p-3">
                    <div>{p.phone}</div>
                    <div className="text-sm text-gray-400">
                      {p.id}
                    </div>
                  </td>

                  <td className="p-3">{p.gender}</td>

                  <td className="p-3">
                    {new Date(p.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-3">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                      Registered
                    </span>
                  </td>

                  <td className="p-3">
                    <button className="bg-teal-500 text-white px-4 py-1 rounded-md">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-6 text-sm">
          <p className="text-gray-500">
            Showing {visiblePatients.length} out of {FilterPatients.length} patients
          </p>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === i + 1
                    ? "bg-teal-500 text-white"
                    : "bg-white"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => {
                if (currentPage < totalPages) {
                  setCurrentPage(currentPage + 1);
                }
              }}
              className="px-3 py-1 border rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}