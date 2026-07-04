import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AidlyLogo from "../src/assets/Logomark_White.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("hospitalToken");

  const handleLogout = () => {
    localStorage.removeItem("hospitalToken");
    navigate("/login");
  };

  return (
    <nav
      className="w-full text-white border-b border-white/100"
      style={{
        background: "linear-gradient(180deg, #1A5F48 0%, #18765A 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-4">
        
        {/* Left - Logo + Title */}

        <div className="flex items-center gap-1">
         <img
  src={AidlyLogo}
  alt="logo"
  className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] object-contain"
/>

<h1
  className="text-4xl md:text-5xl font-semibold"
  style={{
    fontFamily: "Inria Serif, serif",
  }}
>
  Aidly
</h1>
        </div>

        {/* Right - Menu */}
        <div className="flex items-center gap-4 md:gap-10">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-lg font-medium">
           <li
  onClick={() => navigate("/")}
  className="hover:text-gray-200 cursor-pointer transition"
>
  Home
</li>

<li
  onClick={() => navigate("/about")}
  className="hover:text-gray-200 cursor-pointer transition"
>
  About
</li>

<li
  onClick={() => navigate("/services")}
  className="hover:text-gray-200 cursor-pointer transition"
>
  Services
</li>

<li
  onClick={() => navigate("/contact")}
  className="hover:text-gray-200 cursor-pointer transition"
>
  Contact
</li>

          {token ? (
  <li
    onClick={handleLogout}
    className="hover:text-gray-200 cursor-pointer transition"
  >
    Logout
  </li>
) : (
  <li
    onClick={() => navigate("/login")}
    className="hover:text-gray-200 cursor-pointer transition"
  >
    Login
  </li>
)}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          >
            <span className="w-7 h-0.5 bg-white transition"></span>
            <span className="w-7 h-0.5 bg-white transition"></span>
            <span className="w-7 h-0.5 bg-white transition"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-white/20 bg-[#1A5F48]/95">
          <ul className="flex flex-col py-4">
            <li className="px-4 py-3 hover:bg-white/10 cursor-pointer transition">
              Home
            </li>
            <li className="px-4 py-3 hover:bg-white/10 cursor-pointer transition">
              About
            </li>
            <li className="px-4 py-3 hover:bg-white/10 cursor-pointer transition">
              Services
            </li>
            <li className="px-4 py-3 hover:bg-white/10 cursor-pointer transition">
              Contact
            </li>
            
            {/* 🔐 Logout (only when logged in) */}
            {token ? (
  <li
    onClick={handleLogout}
    className="px-4 py-3 hover:bg-white/10 cursor-pointer transition"
  >
    Logout
  </li>
) : (
  <li
    onClick={() => {
      setIsOpen(false);
      navigate("/login");
    }}
    className="px-4 py-3 hover:bg-white/10 cursor-pointer transition"
  >
    Login
  </li>
)}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
