import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AidlyLogo from "../../../assets/Logomark_White.svg";
import { Bell, User } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

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
      className="w-full text-white border-b border-white/100 relative"
      style={{
        background: "linear-gradient(180deg, #1A5F48 0%, #18765A 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-5">

        {/* Left */}
        <div className="flex items-center gap-3 md:gap-4">
          <img
            src={AidlyLogo}
            alt="logo"
            className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] object-contain"
          />

          <h1
            className="text-2xl md:text-5xl font-semibold"
            style={{
              fontFamily: "Inria Serif, serif",
            }}
          >
            Aidly Corporate
          </h1>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6 relative">

          {/* User */}
          <div className="relative" ref={profileRef}>
            <User
              size={30}
              className="cursor-pointer"
              onClick={() => {
                setShowProfile(!showProfile);
                setShowNotifications(false);
              }}
            />

            {showProfile && (
              <div className="absolute right-0 top-12 bg-white text-black rounded-md shadow-lg w-52 z-50 overflow-hidden">
                <button className="w-full py-3 text-xl font-semibold hover:bg-gray-100 transition">
                  My Profile
                </button>

                <div className="border-t border-black"></div>

                <button
                  className="w-full py-3 text-xl font-semibold text-red-500 hover:bg-red-50 transition"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Bell */}
          <div className="relative" ref={notificationRef}>
            <Bell
              size={30}
              className="cursor-pointer"
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfile(false);
              }}
            />

            {showNotifications && (
              <div className="absolute right-0 top-12 bg-white text-black rounded-md shadow-lg w-72 z-50 overflow-hidden">
                <div className="px-4 py-4 border-b font-semibold text-lg flex justify-between">
                  <span>🔴 Test Result</span>
                  <span className="text-gray-500 text-sm">2</span>
                </div>

                <div className="px-4 py-4 border-b font-semibold text-lg flex justify-between">
                  <span>🔴 Pending approvals</span>
                  <span className="text-gray-500 text-sm">3</span>
                </div>

                <div className="px-4 py-4 font-semibold text-lg flex justify-between">
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

export default Navbar;