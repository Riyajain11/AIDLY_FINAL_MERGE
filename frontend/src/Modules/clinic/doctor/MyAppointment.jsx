// import React, {useState} from "react";
// import { ArrowLeft, Search } from "lucide-react";
// import { useNavigate } from "react-router-dom";


// const statusColor = {
//   Complete: "bg-green-100 text-green-700",
//   Upcomming: "bg-blue-100 text-blue-700",
//   cancelled: "bg-red-100 text-red-700",
//   Confirmed: "bg-teal-100 text-teal-700",
// };

// export default function Myapointment() {
//  const navigate = useNavigate();
//   const [search, setsearch] = useState("")
//   const [rowsPerPage, setRowsPerPage] = useState(10)

//   const FilterPatients = patients.filter((p) =>
//     p.name.toLowerCase().includes(search.toLowerCase()) ||
//     p.id.toLowerCase().includes(search.toLowerCase()) ||
//     p.phone.toLowerCase().includes(search.toLowerCase()) ||
//     p.age.toString().includes(search) ||
//     p.gender.toLowerCase().includes(search.toLowerCase()) ||
//     p.status.toLowerCase().includes(search.toLowerCase())
//   );

//   // pagination logic
//   const visiblePatients = FilterPatients.slice(0, rowsPerPage);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-[#7ab5b1] to-[#b8e2df] ">

// <div className="bg-white p-6 mb-2 rounded-b-4xl">
//   <div className="flex items-center justify-center relative mb-6">
//     <button
//         onClick={() => navigate(-1)}
//         className="absolute left-0"
//       >
//         <ArrowLeft className="cursor-pointer hover:text-teal-600" size={28} />
//       </button>
//     <h1 className="text-3xl font-bold">My Appointments</h1>
//   </div>
// </div>

// <div className="bg-white rounded-3xl shadow-lg p-6 max-w-7xl mx-auto ">

// <div className="flex gap-2">
// {/* dates */}
// <div className="flex items-center border rounded-lg px-3 py-2  mb-4">
  
//   <input
//     type="date"
//     placeholder="All Status"
//     className="outline-none ml-2 w-full"
//     value={search}
//     onChange={(e)=>setsearch(e.target.value)}
//   />
// </div>

// {/* Search */}
// <div className="flex items-center border rounded-lg px-6 py-1   mb-4">
//   <Search size={18} className="text-gray-400" />
//   <input
//     type="text"
//     placeholder="Search"
//     className="outline-none ml-2 w-full"
//     value={search}
//     onChange={(e)=>setsearch(e.target.value)}
//   />
// </div>
// </div>

// {/* Table */}
// <div className="overflow-x-auto">
// <table className="w-full text-left border-collapse">

// <thead className="bg-gray-100 text-gray-600">
// <tr>
// <th className="p-3">Time</th>
// <th className="p-3">Patient Name</th>
// <th className="p-3">Phone / ID</th>
// <th className="p-3">Age</th>
// <th className="p-3">Gender</th>
// <th className="p-3">Reason</th>
// <th className="p-3">Status</th>
// <th className="p-3">Actions</th>
// </tr>
// </thead>

// <tbody>

// {visiblePatients.map((p, index) => (
// <tr key={index} className="border-b hover:bg-gray-50 transition">

// <td className="p-3">
// <div className="font-semibold">{p.Time}</div>
// </td>

// <td className="p-3">
// <div className="font-semibold">{p.name}</div>
// <div className="text-sm text-gray-400">{p.id}</div>
// </td>

// <td className="p-3">
// <div>{p.phone}</div>
// <div className="text-sm text-gray-400">{p.id}</div>
// </td>

// <td className="p-3">{p.age}</td>

// <td className="p-3">{p.gender}</td>

// <td className="p-3">{p.Reason}</td>

// <td className="p-3">
// <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor[p.status]}`}>
// {p.status}
// </span>
// </td>

// <td className="p-3">
// <button className="bg-teal-500 text-white px-4 py-1 rounded-md">
// View
// </button>
// </td>

// </tr>
// ))}

// </tbody>

// </table>
// </div>

// {/* Footer */}
// <div className="flex justify-between items-center mt-6 text-sm">

// <p className="text-gray-500">
// Showing {visiblePatients.length} out of {FilterPatients.length} patients
// </p>

// <div className="flex items-center gap-2">

// <select
// className="border px-2 py-1 rounded"
// value={rowsPerPage}
// onChange={(e)=>setRowsPerPage(Number(e.target.value))}
// >

// {Array.from({length: FilterPatients.length}, (_,i)=>(
// <option key={i} value={i+1}>
// {i+1}
// </option>
// ))}

// </select>

// <button className="px-3 py-1 border rounded bg-teal-500 text-white">
// 1
// </button>

// <button className="px-3 py-1 border rounded">2</button>
// <button className="px-3 py-1 border rounded">3</button>

// <button className="px-3 py-1 border rounded">
// Next
// </button>

// </div>
// </div>

// </div>
// </div>
// );
// }

import React, { useEffect, useState } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../../../service/api";

const statusColor = {
  waiting: "bg-yellow-100 text-yellow-700",
  completed: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

export default function Myapointment() {
  const navigate = useNavigate();

  const [patients, setPatients] = useState([]);
  const [search, setsearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const doctorId = localStorage.getItem("doctorId");

      const res = await api.get(`/appointments/doctor/${doctorId}`);

      setPatients(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const calculateAge = (dob) => {
    if (!dob) return "-";

    const birth = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();

    const month = today.getMonth() - birth.getMonth();

    if (
      month < 0 ||
      (month === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  };

  const FilterPatients = patients.filter((p) => {
    const name =
      `${p.patientId?.firstName || ""} ${p.patientId?.lastName || ""}`.toLowerCase();

    return (
      name.includes(search.toLowerCase()) ||
      (p.patientId?.patientId || "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      (p.patientId?.phone || "").includes(search) ||
      (p.patientId?.gender || "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      (p.status || "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      (p.reason || "")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  });

  const visiblePatients = FilterPatients.slice(0, rowsPerPage);

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

          <h1 className="text-3xl font-bold">
            My Appointments
          </h1>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-6 max-w-7xl mx-auto">

        <div className="flex gap-2">

          <div className="flex items-center border rounded-lg px-3 py-2 mb-4">
            <input
              type="date"
              className="outline-none ml-2 w-full"
            />
          </div>

          <div className="flex items-center border rounded-lg px-6 py-1 mb-4">
            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search"
              className="outline-none ml-2 w-full"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
          </div>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full text-left border-collapse">

            <thead className="bg-gray-100 text-gray-600">

              <tr>
                <th className="p-3">Time</th>
                <th className="p-3">Patient Name</th>
                <th className="p-3">Phone / ID</th>
                <th className="p-3">Age</th>
                <th className="p-3">Gender</th>
                <th className="p-3">Reason</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>

            </thead>

            <tbody>

              {visiblePatients.map((p) => (

                <tr
                  key={p._id}
                  className="border-b hover:bg-gray-50 transition"
                >

                  <td className="p-3">
                    <div className="font-semibold">
                      {p.appointmentTime}
                    </div>
                  </td>

                  <td className="p-3">
                    <div className="font-semibold">
                      {p.patientId?.firstName}{" "}
                      {p.patientId?.lastName}
                    </div>

                    <div className="text-sm text-gray-400">
                      {p.patientId?.patientId}
                    </div>
                  </td>

                  <td className="p-3">
                    <div>{p.patientId?.phone}</div>

                    <div className="text-sm text-gray-400">
                      {p.patientId?.patientId}
                    </div>
                  </td>

                  <td className="p-3">
                    {calculateAge(
                      p.patientId?.dateOfBirth
                    )}
                  </td>

                  <td className="p-3">
                    {p.patientId?.gender}
                  </td>

                  <td className="p-3">
                    {p.reason}
                  </td>

                  <td className="p-3">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        statusColor[p.status]
                      }`}
                    >
                      {p.status}
                    </span>

                  </td>

                  <td className="p-3">

                    <button
                      onClick={() =>
                        navigate(
                          `/dashboard/doctor/prescription/${p._id}`
                        )
                      }
                      className="bg-teal-500 text-white px-4 py-1 rounded-md"
                    >
                      View
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        <div className="flex justify-between items-center mt-6 text-sm">

          <p className="text-gray-500">
            Showing {visiblePatients.length} out of{" "}
            {FilterPatients.length} patients
          </p>

          <div className="flex items-center gap-2">

            <select
              className="border px-2 py-1 rounded"
              value={rowsPerPage}
              onChange={(e) =>
                setRowsPerPage(Number(e.target.value))
              }
            >
              {Array.from(
                { length: Math.max(FilterPatients.length, 1) },
                (_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                )
              )}
            </select>

            <button className="px-3 py-1 border rounded bg-teal-500 text-white">
              1
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}