
import React, { useState, useRef, useEffect } from "react";
import AidlyLogo from "../src/assets/Logomark_White.svg";
import { Bell, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DashboardNav = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const token = localStorage.getItem("hospitalToken");

  const profileRef = useRef(null);
  const notificationRef = useRef(null);
  const navigate = useNavigate();
 
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setShowProfile(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };
   
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("clinicId");
  localStorage.removeItem("user");
  localStorage.removeItem("hospitalToken");

  navigate("/");
};

  return (
    <nav
      className="w-full text-white border-b-4 border-white relative"
      style={{
        background: "linear-gradient(180deg, #1A5F48 0%, #18765A 100%)",
      }}
    >
      <div className="w-full flex items-center justify-between px-6 py-5">
        {/* Left */}
        <div className="flex items-center gap-4">
          <img
            src={AidlyLogo}
            alt="logo"
            className="w-[70px] h-[70px] object-contain"
          />

          <h1
            className="text-5xl font-semibold"
            style={{ fontFamily: "Inria Serif, serif" }}
          >
            Aidly Corporate
          </h1>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6 relative">
          
          {/* User Icon */}
          <div className="relative" ref={profileRef}>
            <User
              size={30}
              className="cursor-pointer"
              onClick={() => {
                setShowProfile(!showProfile);
                setShowNotifications(false);
              }}
            />

            {/* Profile Dropdown */}
            {showProfile && (
              <div className="absolute right-0 top-12 bg-white text-black rounded-md shadow-lg w-52 z-50 overflow-hidden">
                <button className="w-full py-3 text-2xl font-semibold hover:bg-gray-100 transition">
                  My Profile
                </button>

                <div className="border-t border-black"></div>

                <button
                  className="w-full py-3 text-2xl font-semibold text-red-500 hover:bg-red-50 transition"
                  onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Bell Icon */}
          <div className="relative" ref={notificationRef}>
            <Bell
              size={30}
              className="cursor-pointer"
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfile(false);
              }}
            />

            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 top-12 bg-white text-black rounded-md shadow-lg w-72 z-50 overflow-hidden">
                <div className="px-4 py-4 border-b font-semibold text-xl flex justify-between">
                  <span>🔴 Test Result</span>
                  <span className="text-gray-500 text-sm">2</span>
                </div>

                <div className="px-4 py-4 border-b font-semibold text-xl flex justify-between">
                  <span>🔴 Pending approvals</span>
                  <span className="text-gray-500 text-sm">3</span>
                </div>

                <div className="px-4 py-4 font-semibold text-xl flex justify-between">
                  <span>🔴 Patient Emergency</span>
                  <span className="text-gray-500 text-sm">1</span>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;