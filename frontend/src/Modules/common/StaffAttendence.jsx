import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AttendancePage() {
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [attendance, setAttendance] = useState({});
  const [staffData, setStaffData] = useState([]);
  const [loading, setLoading] = useState(true);

  const clinicId = localStorage.getItem("clinicId");

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const res = await axios.get(
        `http://https://aidly-final-merge.onrender.com/api/attendance/staff/${clinicId}`,
      );

      setStaffData(res.data.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load staff");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (staffId, value) => {
    setAttendance((prev) => ({
      ...prev,
      [staffId]: value,
    }));
  };

  const saveAttendance = async () => {
    if (!date) {
      alert("Please select a date");
      return;
    }

    const records = staffData.map((staff) => ({
      staffId: staff.staffId,
      staffType: staff.type,
      status: attendance[staff.staffId] || "absent",
      time: new Date().toLocaleTimeString(),
    }));

    try {
      await axios.post(
        "https://aidly-final-merge.onrender.com/api/attendance/bulk",
        {
          clinicId,
          date,
          records,
        },
      );

      navigate("/staffsuccessful");
    } catch (error) {
      console.error(error.response?.data || error);
      alert(error.response?.data?.message || "Failed to save attendance");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Loading staff...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A5F48] via-[#89C9CA] to-[#C6EBE8]">
      <div className="bg-gray-300 rounded-b-4xl py-22 relative mb-1">
        <div className="flex justify-center gap-4 absolute bottom-6 left-0 right-0">
          <label>Select date:</label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border rounded px-3 py-1"
          />

          <button
            onClick={saveAttendance}
            className="bg-green-500 text-white px-4 py-1 rounded-full"
          >
            Save
          </button>
        </div>

        <div className="bg-white rounded-b-4xl p-6 z-10 -mt-22">
          <div className="flex items-center justify-center relative">
            <button
              onClick={() => navigate("/dashboard/receptionist")}
              className="absolute left-4 text-3xl font-bold hover:text-green-600"
            >
              ←
            </button>

            <h1 className="text-3xl font-bold">Update Staff Attendance</h1>
          </div>
        </div>
      </div>

      <div className="max-w-5xl bg-white shadow rounded-lg p-4 mx-auto text-center">
        <table className="w-full border text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Staff ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">Present</th>
              <th className="border p-2">Absent</th>
              <th className="border p-2">Leave</th>
            </tr>
          </thead>

          <tbody>
            {staffData.map((staff) => (
              <tr key={staff.staffId}>
                <td className="border p-2">{staff.staffId}</td>
                <td className="border p-2">{staff.name}</td>
                <td className="border p-2 capitalize">{staff.type}</td>

                <td className="border p-2">
                  <input
                    type="radio"
                    name={`status-${staff.staffId}`}
                    onChange={() => handleChange(staff.staffId, "present")}
                  />
                </td>

                <td className="border p-2">
                  <input
                    type="radio"
                    name={`status-${staff.staffId}`}
                    onChange={() => handleChange(staff.staffId, "absent")}
                  />
                </td>

                <td className="border p-2">
                  <input
                    type="radio"
                    name={`status-${staff.staffId}`}
                    onChange={() => handleChange(staff.staffId, "leave")}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
