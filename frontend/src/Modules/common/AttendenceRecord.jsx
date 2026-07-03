import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AttendenceReacordPage() {
  const navigate = useNavigate();

  const [selectedMonth, setSelectedMonth] = useState("");
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(false);

  const clinicId = localStorage.getItem("clinicId");

  const fetchAttendance = async (monthValue) => {
    if (!monthValue || !clinicId) return;

    try {
      setLoading(true);

      const [year, month] = monthValue.split("-");

      const res = await axios.get(
        `http://https://aidly-final-merge.onrender.com/api/attendance/${clinicId}?month=${Number(
          month,
        )}&year=${year}`,
      );

      setAttendanceData(res.data.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load attendance");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedMonth) {
      fetchAttendance(selectedMonth);
    }
  }, [selectedMonth]);

  const printAttendance = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A5F48] via-[#89C9CA] to-[#C6EBE8]">
      <div className="bg-gray-300 rounded-b-3xl py-22 relative mb-6">
        <div className="flex justify-center gap-4 absolute bottom-6 left-0 right-0">
          <label>Select month:</label>

          <input
            type="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="border rounded px-3 py-1"
          />

          <button
            onClick={printAttendance}
            className="bg-green-500 text-white px-4 py-1 rounded-full ml-12"
          >
            Print
          </button>
        </div>

        <div className="bg-white rounded-b-3xl p-6 z-10 -mt-22">
          <div className="flex items-center justify-center relative">
            <button
              onClick={() => navigate("/dashboard/receptionist")}
              className="absolute left-4 text-3xl font-bold hover:text-green-600"
            >
              ←
            </button>

            <h1 className="text-3xl font-bold">Attendance Record</h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto bg-white shadow rounded-lg p-6">
        {loading ? (
          <p className="text-center text-xl">Loading attendance...</p>
        ) : attendanceData.length === 0 ? (
          <p className="text-center text-gray-500">
            No attendance records found
          </p>
        ) : (
          <table className="w-full border text-center">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">Staff ID</th>
                <th className="border p-2">Staff Type</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Time</th>
                <th className="border p-2">Date</th>
              </tr>
            </thead>

            <tbody>
              {attendanceData.map((record, index) => (
                <tr key={index}>
                  <td className="border p-2">{record.staffId}</td>
                  <td className="border p-2 capitalize">{record.staffType}</td>
                  <td className="border p-2 capitalize">{record.status}</td>
                  <td className="border p-2">{record.time}</td>
                  <td className="border p-2">
                    {new Date(record.date).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
