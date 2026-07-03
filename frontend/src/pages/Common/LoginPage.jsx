import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../service/api";
import { jwtDecode } from "jwt-decode";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      let res;

      if (userId.startsWith("AIDLY")) {
        res = await api.post("/aidly-admin/login", {
          adminId: userId,
          password,
        });
      } else if (userId.startsWith("HOSPAMB")) {
        res = await api.post("/hospital-ambulance/login", {
          hospitalAmbulanceId: userId,
          password,
        });
      } else if (userId.startsWith("PRIVAMB")) {
        res = await api.post("/private-ambulance/login", {
          privateAmbulanceId: userId,
          password,
        });
      }else if (userId.startsWith("ODC")) {
  res = await api.post("/online-doctor/login", {
    userId,
    password,
  });
}else {
        res = await api.post("/clinic/auth/login", {
          userId,
          password,
        });
      }

      const data = res.data;
      console.log(data);
    localStorage.setItem("token", data.token);

const decoded = jwtDecode(data.token);

localStorage.setItem("role", decoded.role);

if (data.clinicId) {
  localStorage.setItem("clinicId", data.clinicId);
}

if (data.doctorId) {
  localStorage.setItem("doctorId", data.doctorId);
}

if (data.user || data.ambulance || data.admin) {
  localStorage.setItem(
    "user",
    JSON.stringify(data.user || data.ambulance || data.admin)
  );
}

      if (decoded.role === "aidlyAdmin") {
        navigate("/admin/dashboard");
      } else if (decoded.role === "admin") {
        navigate("/dashboard/admin");
      } else if (decoded.role === "doctor") {
        navigate("/dashboard/doctor");
      } else if (decoded.role === "manager") {
        navigate("/dashboard/manager");
      } else if (decoded.role === "receptionist") {
        navigate("/dashboard/receptionist");
      } else if (decoded.role === "hospitalAmbulance") {
        navigate("/HospitalAmbulance-Dashboard");
      } else if (decoded.role === "privateAmbulance") {
        navigate("/PrivateAmbulance-Dashboard");
      }else if (decoded.role === "online-doctor") {
        navigate("/dashboard/doctor");
      }
    } catch (err) {
      if (err.response?.status === 401) {
        setError("Invalid User ID or Password");
      } else if (err.response?.status === 404) {
        setError("User not found");
      } else {
        setError(err.response?.data?.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-[calc(100vh-64px)] flex justify-center items-start pt-16"
      style={{
        background:
          "linear-gradient(0deg, #C6EBE8 0%, #89C9CA 60.58%, #1A5F48 100%)",
      }}
    >
      <div className="bg-white w-[90%] max-w-[520px] rounded-lg shadow-lg px-10 py-8">
        <h1 className="text-3xl font-semibold mb-1">Login</h1>

        <p className="text-sm text-gray-600 mb-6">
          Enter your credentials to login
        </p>

        {error && (
          <p className="text-red-600 text-sm mb-3">{error}</p>
        )}

        <form onSubmit={handleLogin}>
          <label className="block text-sm font-semibold mb-1">
            User ID
          </label>

          <input
            type="text"
            className="w-full mb-4 px-4 py-2 rounded-md bg-[#E9E9E9]"
            placeholder="Enter User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />

          <label className="block text-sm font-semibold mb-1">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-2 rounded-md bg-[#E9E9E9]"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="flex justify-end mb-5">
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1967FF] text-white py-3 rounded-md font-semibold text-lg mb-4"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="text-sm text-gray-700 text-center">
          Don’t have an account?{" "}
          <Link
            to="/loginoption"
            className="text-blue-600 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;