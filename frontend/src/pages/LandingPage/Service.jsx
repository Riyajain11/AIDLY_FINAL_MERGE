import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import AmbulanceImage from "../../assets/AmbulanceImage.png";
import HomecareImage from "../../assets/HomecareImage.png";
import DoctorImage from "../../assets/DoctorApointmentImage.png";
import MedicalStoreImage from "../../assets/MedicalStoreimage.png";

const AidlyServices = () => {
     const servicesRef = useRef(null);

       useEffect(() => {
    gsap.from(servicesRef.current, {
      y: -120,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <div ref={servicesRef} className="w-full bg-gradient-to-b from-[#1A5F48] via-[#89C9CA] to-[#C6EBE8] px-4 sm:px-6 md:px-10 py-6 md:py-10">

      <h1 className="font-bold text-3xl sm:text-4xl text-white mt-15 md:mt-15 mb-8 text-center md:text-left">
        Our Services
      </h1>

      {/* Ambulance */}
      <div className="relative w-full max-w-6xl mx-auto rounded-[30px] bg-white/85 shadow-lg overflow-hidden py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-16 mb-10 md:mb-15">
        <img
          src={AmbulanceImage}
          alt="ambulance"
          className="absolute inset-0 w-full h-full object-contain opacity-15"
        />

        <div className="relative z-10 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-4 md:mb-6">
            Ambulance Booking
          </h1>

          <p className="text-base sm:text-xl md:text-3xl font-medium text-black leading-snug mb-4 md:mb-6">
            Book emergency and non-emergency ambulances quickly with real-time
            assistance and reliable transportation.
          </p>

          <p className="text-sm sm:text-lg md:text-2xl font-medium text-black leading-relaxed max-w-5xl mx-auto">
            Get immediate access to nearby ambulances during medical
            emergencies. Our smart booking system enables quick dispatch,
            real-time tracking, and seamless communication to ensure timely
            patient transportation and emergency care.
          </p>
        </div>
      </div>

      {/* Doctor Appointment */}
      <div className="relative w-full max-w-6xl mx-auto rounded-[30px] bg-white/85 shadow-lg overflow-hidden py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-16 mb-10 md:mb-15">
        <img
          src={DoctorImage}
          alt="doctor"
          className="absolute inset-0 w-full h-full object-contain opacity-15"
        />

        <div className="relative z-10 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-4 md:mb-6">
            Doctor Appointment
          </h1>

          <p className="text-base sm:text-xl md:text-3xl font-medium text-black leading-snug mb-4 md:mb-6">
            Easily schedule appointments with qualified doctors for in-person
            or online consultations.
          </p>

          <p className="text-sm sm:text-lg md:text-2xl font-medium text-black leading-relaxed max-w-5xl mx-auto">
            Connect with experienced doctors through online or in-person
            appointments. Receive medical advice, diagnoses, prescriptions,
            follow-up care, and specialist consultations without long waiting
            times.
          </p>
        </div>
      </div>

      {/* Homecare */}
      <div className="relative w-full max-w-6xl mx-auto rounded-[30px] bg-white/85 shadow-lg overflow-hidden py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-16 mb-10 md:mb-15">
        <img
          src={HomecareImage}
          alt="homecare"
          className="absolute inset-0 w-full h-full object-contain opacity-15"
        />

        <div className="relative z-10 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-4 md:mb-6">
            Home Healthcare
          </h1>

          <p className="text-base sm:text-xl md:text-3xl font-medium text-black leading-snug mb-4 md:mb-6">
            Receive professional healthcare services at home, including nursing
            care, health monitoring, and patient support.
          </p>

          <p className="text-sm sm:text-lg md:text-2xl font-medium text-black leading-relaxed max-w-5xl mx-auto">
            Access professional healthcare services in the comfort of your
            home. We provide nursing care, patient monitoring, elderly care,
            post-surgery assistance, physiotherapy support, and routine health
            checkups.
          </p>
        </div>
      </div>

      {/* Medical Store */}
      <div className="relative w-full max-w-6xl mx-auto rounded-[30px] bg-white/85 shadow-lg overflow-hidden py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-16 mb-10 md:mb-15">
        <img
          src={MedicalStoreImage}
          alt="medical store"
          className="absolute inset-0 w-full h-full object-contain opacity-15"
        />

        <div className="relative z-10 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-4 md:mb-6">
            Medical Store
          </h1>

          <p className="text-base sm:text-xl md:text-3xl font-medium text-black leading-snug mb-4 md:mb-6">
            Order medicines and healthcare products conveniently with fast
            delivery and trusted pharmacy services.
          </p>

          <p className="text-sm sm:text-lg md:text-2xl font-medium text-black leading-relaxed max-w-5xl mx-auto">
            Order medicines, healthcare products, and medical equipment from
            trusted pharmacies. Enjoy doorstep delivery, prescription-based
            ordering, and convenient access to essential healthcare supplies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AidlyServices;