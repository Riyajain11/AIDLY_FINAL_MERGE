// import React from "react";
// import { useState } from "react";
// import { useRef, useEffect, useLayoutEffect  } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
// import { FaGooglePlay, FaApple } from "react-icons/fa";
// import { FaLinkedin, FaInstagram } from "react-icons/fa";
// import landinglogo from "../../assets/landingLogo2.png"
// import AidlyLogo from "../../assets/Aidly2.png"
// import AmbulanceImage from "../../assets/AmbulanceImage.png"
// import DoctorApointmentImage from "../../assets/DoctorApointmentImage.png"
// import HomeCareImage from "../../assets/HomeCareImage.png"
// import MedicalStore from "../../assets/MedicalStoreImage.png"
// import ReviewImage1 from "../../assets/ReviewImage.jpeg"
// import ReviewImage2 from "../../assets/ReviewImage2.jpeg"
// import ReviewImage3 from "../../assets/ReviewImage4.jpeg"
// import ReviewImage4 from "../../assets/ReviewImage2.jpeg"
// import ReviewImage5 from "../../assets/ReviewImage5.jpeg"

// const services = [
//   {
//     title: "Ambulance Booking",
//     image: AmbulanceImage,
//     reverse: false,
//   },
//   {
//     title: "Doctor Appointment",
//     image: DoctorApointmentImage,
//     reverse: true,
//   },
//   {
//     title: "Home Healthcare",
//     image: HomeCareImage,
//     reverse: false,
//   },
//   {
//     title: "Medical Store",
//     image: MedicalStore,
//     reverse: true,
//   },
// ];

// const reviews = [
//   {
//     name: "Rahul Sharma",
//     image: ReviewImage1,
//     text: "Booked an ambulance in an emergency, and it arrived quickly. Excellent service and support",
//   },
//   {
//     name: "Priya Verma",
//     image: ReviewImage2,
//     text: "Home healthcare team was professional and caring. Highly recommended for patient care at home",
//   },
//   {
//     name: "Amit Singh",
//     image: ReviewImage3,
//     text: "Doctor appointment booking was simple and hassle free. The consultation experience was great",
//   },
//   {
//     name: "Sneha Patel",
//     image: ReviewImage4,
//     text: "Ordered medicines through the medical store and received them on time. Reliable and convenient service",
//   },
//   {
//     name: "Rohan Gupta",
//     image: ReviewImage5,
//     text: "Complete healthcare platform with excellent Ambulance, Doctor and Pharmacy services.",
//   },
// ];

// export default function LandingPage() {
//   const [showPopup, setShowPopup] = useState(false);

//   const heroLogoRef = useRef(null);
// const aboutLogoRef = useRef(null);


// const heroRef = useRef(null);
// const aboutRef = useRef(null);
// const serviceRefs = useRef([]);
// const reviewsRef = useRef(null);
// const downloadRef = useRef(null);

// useLayoutEffect (() => {
// const timer = setTimeout(() => {
//     const hero = heroLogoRef.current;
//     const target = aboutLogoRef.current;

//     if (!hero || !target) return;

//     const heroRect = hero.getBoundingClientRect();
//     const targetRect = target.getBoundingClientRect();

//     const x = targetRect.left - heroRect.left;
//     const y = targetRect.top - heroRect.top;

//     gsap.to(hero, {
//       x,
//       y,
//       scale: 1,
//       ease: "none",
//       scrollTrigger: {
//         trigger: target,
//         start: "top 80%",
//         end: "top 40%",
//         scrub: true,
//       },
//     });
//   }, 2200);
//   const sections = [
//   aboutRef.current,

//   reviewsRef.current,
//   downloadRef.current,
// ];

// sections.forEach((section) => {
//   gsap.from(section, {
//     opacity: 0,
//     y: 100,
//     duration: 3.0,
//     ease: "power3.out",
//     scrollTrigger: {
//       trigger: section,
//       start: "top 80%",
//       toggleActions: "play none none none",
//     },
//   });
// });

// serviceRefs.current.forEach((card, i) => {
//   if (!card) return;

//   gsap.from(card, {
//     opacity: 0,
//     x: i % 2 === 0 ? -150 : 150,
//     duration: 1.5,
//     ease: "none",
//     scrollTrigger: {
//       trigger: card,
//       start: "top 85%",
//       toggleActions: "play none none none",
//     },
//   });
// });

// gsap.from(heroRef.current, {
//   opacity: 0,
//   y: 20,
//   scale: 0.9,
//   duration: 1.5,
//   ease: "power3.out",
//   delay: 0,
// });

//  return () => clearTimeout(timer);
// }, []);

// const handleMouseMove = (e) => {
//   const rect = heroLogoRef.current.getBoundingClientRect();

//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;

//   const centerX = rect.width / 2;
//   const centerY = rect.height / 2;

//   const rotateY = (x - centerX) / 20;
//   const rotateX = -(y - centerY) / 20;

//   gsap.to(heroLogoRef.current, {
//     rotationY: rotateY,
//     rotationX: rotateX,
//     scale: 1.05,
//     transformPerspective: 1000,
//     duration: 0.3,
//     ease: "power2.out",
//   });
// };

// const handleMouseLeave = () => {
//   gsap.to(heroLogoRef.current, {
//     rotationX: 0,
//     rotationY: 0,
//     scale: 1,
//     duration: 0.5,
//     ease: "power3.out",
//   });
// };

//   return (
//     <div className="bg-gradient-to-b from-[#1A5F48] via-[#89C9CA] to-[#C6EBE8] min-h-[400px] ">


//       {/* HERO */}
//       <section ref={heroRef} className="pt-28  flex flex-col items-center">
//         <img
//           ref={heroLogoRef}
//           src={landinglogo}
//           alt="Logo"
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//           className="w-[350px] object-contain"
//         />

//         <h1 className="text-7xl font-bold text-blue-600 ">Aidly</h1>

//         <p className="text-2xl font-bold mt-3">
//           Your health, our priority. Stay Healthy!
//         </p>

//         <div className="flex gap-8 mt-8">
//           <button className="px-12 py-4 rounded-2xl bg-blue-600 text-white text-3xl font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
//             Explore Aidly
//           </button>

//           <button className="px-12 py-4 rounded-2xl bg-blue-600 text-white text-3xl font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
//             View Services
//           </button>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section ref={aboutRef} className="py-20 px-10">
//         <div className="max-w-6xl mx-auto flex items-center justify-between">

//           <div className="flex flex-col items-center ">
//             <h2 className="text-6xl font-bold text-center md:text-center">
//               Aidly
//             </h2>

//             <p className="text-3xl mt-5 max-w-xl text-center md:text-left">
//               Aidly is an all-in-one healthcare platform offering smart and
//               digital unified ecosystem.
//             </p>
//           </div>

//        <div ref={aboutLogoRef} className="w-[350px] h-[350px]" />
//         </div>
//       </section>

//       {/* SERVICES */}
//       <section  className="py-16 px-6">
//         <h2 className="text-6xl font-bold text-center mb-10">Our Services</h2>

//         <div className="space-y-10 max-w-7xl mx-auto">
//           {services.map((service, i) => (
//             <div
//               key={i}
//                ref={(el) => (serviceRefs.current[i] = el)}
//               className={` rounded-3xl  flex items-center justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${service.reverse ? "flex-row-reverse bg-gradient-to-r from-[#1d8c72] to-[#d9fff7] pl-30 pr-10" : "bg-gradient-to-l from-[#1d8c72] to-[#d9fff7] pl-10 pr-30"
//                 }`}
//             >
//               <img
//                 src={service.image}
//                 alt=""
//                 className="w-[360px] h-[300px] object-contain"
//               />

//               <div className="flex flex-col items-center">
//                 <h3 className="text-5xl text-white font-semibold">
//                   {service.title}
//                 </h3>

//                 <button className="mt-10 bg-white px-8 py-3 rounded-full text-2xl font-medium transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
//                   View Details
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* REVIEWS */}
//       <section ref={reviewsRef} className="py-20 px-6">
//         <h2 className="text-center text-6xl font-bold text-blue-500">
//           Aidly Reviews
//         </h2>
//         <p className="text-center text-4xl font-semibold mt-3">
//           What Our User Says
//         </p>

//         <div className="grid grid-cols-5 gap-5 mt-12">
//           {reviews.map((review, i) => (
//             <div key={i} className="shadow-lg rounded-xl p-4 bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ">
//               <img
//                 src={review.image}
//                 alt=""
//                 className="w-full h-52 object-cover rounded-lg"
//               />

//               <div className="text-yellow-500 text-center mt-3">★★★★★</div>

//               <h3 className="font-bold text-center mt-3">{review.name}</h3>

//               <p className="text-center text-sm mt-3">{review.text}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* DOWNLOAD */}
//       <section ref={downloadRef} className="py-16 px-5 ">
//         <div className="max-w-7xl mx-auto">

//           <div className="flex gap-8 items-center" >
//             <h2 className="text-4xl font-bold ">Download Aidly App:</h2>

//             <button onClick={()=>setShowPopup(true)}
//              className="bg-black text-white rounded-xl text-3xl flex items-center gap-3 px-6 py-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
//               <FaGooglePlay className="text-4xl" />
//               Get on Google Play Store
//             </button>

//             <button onClick={()=>setShowPopup(true)} 
//             className="bg-black text-white rounded-xl text-3xl flex items-center gap-3 px-6 py-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
//               <FaApple className="text-4xl" />
//               Get on Apple App Store
//             </button>
//           </div>
//         </div>


//         <div className="mt-10 space-y-5 mx-auto max-w-2xl">
//        <a
//   href="https://www.linkedin.com/company/aidly-in/"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#B8B6FF] via-[#2F3FD8] to-[#B8B6FF] rounded-full py-4 px-4 text-lg md:text-3xl font-semibold transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
// >
//   <span>Follow us on LinkedIn for more updates</span>
//   <FaLinkedin className="text-3xl shrink-0" />
// </a>

//           <a
//             href="https://www.instagram.com/aidly_in?igsh=MWxxMWt1cGoxNmdscA=="
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-center gap-3  block bg-gradient-to-r from-[#A64DFF] via-[#dac67f] to-[#A64DFF] rounded-full py-4 px-4  md:text-3xl font-semibold transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
//             Follow us on Instagram for more updates
//             <FaInstagram className="text-3xl shrink-0"/>
//           </a>

//           <p className="text-3xl mt-10 font-bold">
//             Reach out to us:
//             <a
//               href="mailto:aidlyservice2025@gmail.com?subject=Inquiry about Aidly"
//               className="text-blue-500 underline ml-2 hover:text-blue-700"
//             >
//               aidlyservice2025@gmail.com
//             </a>
//           </p>
//         </div>


//       </section>
//       {showPopup && (
//   <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]">
//     <div className="bg-white rounded-2xl p-8 shadow-2xl text-center w-[350px]">
//       <h2 className="text-3xl font-bold mb-3">Launching Soon 🚀</h2>
//       <p className="text-gray-600 mb-5">
//         Aidly app will be available soon on Google Play Store & Apple Store.
//       </p>

//       <button
//         onClick={() => setShowPopup(false)}
//         className="bg-blue-500 text-white px-6 py-2 rounded-lg"
//       >
//         Close
//       </button>
//     </div>
//   </div>
// )}
//       <p className="text-center mb-1 text-xl">
//         © 2025 Aidly. All rights reserved.
//       </p>
//     </div>
//   );
// }

import React, { useState, useRef, useLayoutEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGooglePlay, FaApple, FaLinkedin, FaInstagram } from "react-icons/fa";
import landinglogo from "../../assets/landingLogo2.png";
import AidlyLogo from "../../assets/Aidly2.png";
import AmbulanceImage from "../../assets/AmbulanceImage.png";
import DoctorApointmentImage from "../../assets/DoctorApointmentImage.png";
import HomeCareImage from "../../assets/HomeCareImage.png";
import MedicalStore from "../../assets/MedicalStoreImage.png";
import ReviewImage1 from "../../assets/ReviewImage.jpeg";
import ReviewImage2 from "../../assets/ReviewImage2.jpeg";
import ReviewImage3 from "../../assets/ReviewImage4.jpeg";
import ReviewImage4 from "../../assets/ReviewImage2.jpeg";
import ReviewImage5 from "../../assets/ReviewImage5.jpeg";

gsap.registerPlugin(ScrollTrigger);

const NAV_HEIGHT = 40;

const services = [
  {
    title: "Ambulance Booking",
    image: AmbulanceImage,
    reverse: false,
  },
  {
    title: "Doctor Appointment",
    image: DoctorApointmentImage,
    reverse: true,
  },
  {
    title: "Home Healthcare",
    image: HomeCareImage,
    reverse: false,
  },
  {
    title: "Medical Store",
    image: MedicalStore,
    reverse: true,
  },
];

const reviews = [
  {
    name: "Rahul Sharma",
    image: ReviewImage1,
    text: "Booked an ambulance in an emergency, and it arrived quickly. Excellent service and support",
  },
  {
    name: "Priya Verma",
    image: ReviewImage2,
    text: "Home healthcare team was professional and caring. Highly recommended for patient care at home",
  },
  {
    name: "Amit Singh",
    image: ReviewImage3,
    text: "Doctor appointment booking was simple and hassle free. The consultation experience was great",
  },
  {
    name: "Sneha Patel",
    image: ReviewImage4,
    text: "Ordered medicines through the medical store and received them on time. Reliable and convenient service",
  },
  {
    name: "Rohan Gupta",
    image: ReviewImage5,
    text: "Complete healthcare platform with excellent Ambulance, Doctor and Pharmacy services.",
  },
];

export default function LandingPage() {
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const heroLogoRef = useRef(null);
  const aboutLogoRef = useRef(null);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRefs = useRef([]);
  const reviewsRef = useRef(null);
  const downloadRef = useRef(null);

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      const hero = heroLogoRef.current;
      const target = aboutLogoRef.current;

      if (!hero || !target) return;

      const heroRect = hero.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();

      const x = targetRect.left - heroRect.left;
      const y = targetRect.top - heroRect.top;

   

      gsap.to(hero, {
        x,
        y,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: target,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      });
    }, 2200);

    const sections = [aboutRef.current, reviewsRef.current, downloadRef.current];

    sections.forEach((section) => {
      if (!section) return;
      gsap.from(section, {
        opacity: 0,
        y: 100,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    serviceRefs.current.forEach((card, i) => {
      if (!card) return;

      gsap.from(card, {
        opacity: 0,
        x: i % 2 === 0 ? -150 : 150,
        duration: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.from(heroRef.current, {
      opacity: 0,
      y: 20,
      scale: 0.9,
      duration: 1.5,
      ease: "power3.out",
      delay: 0,
    });

    

    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e) => {
    const rect = heroLogoRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = (x - centerX) / 20;
    const rotateX = -(y - centerY) / 20;

    gsap.to(heroLogoRef.current, {
      rotationY: rotateY,
      rotationX: rotateX,
      scale: 1.05,
      transformPerspective: 1000,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(heroLogoRef.current, {
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  
  return (
    <div
      className="bg-gradient-to-b from-[#1A5F48] via-[#89C9CA] to-[#C6EBE8] min-h-[400px] overflow-x-hidden"
      style={{ paddingTop: NAV_HEIGHT }}
    >
      <section
        
        ref={heroRef}
        className="pt-12 md:pt-22 flex flex-col items-center px-4 text-center"
      >
        <img
          ref={heroLogoRef}
          src={landinglogo}
          alt="Logo"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-[220px] sm:w-[250px] md:w-[350px] object-contain"
        />

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-blue-600">
          Aidly
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-bold mt-3 px-2">
          Your health, our priority. Stay Healthy!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 w-full justify-center">
          <button onClick={()=>navigate("/about")} 
          className="px-8 md:px-12 py-4 rounded-2xl bg-blue-600 text-white text-xl sm:text-2xl md:text-3xl font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            Explore Aidly
          </button>

          <button className="px-8 md:px-12 py-4 rounded-2xl bg-blue-600 text-white text-xl sm:text-2xl md:text-3xl font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            View Services
          </button>
        </div>
      </section>

      <section ref={aboutRef} className="py-16 md:py-20 px-4 md:px-10 scroll-mt-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center md:text-left">
              Aidly
            </h2>

            <p className="text-xl sm:text-2xl md:text-3xl mt-5 max-w-xl text-center md:text-left">
              Aidly is an all-in-one healthcare platform offering smart and digital unified ecosystem.
            </p>
          </div>

          <div
            ref={aboutLogoRef}
            className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] shrink-0"
          />
        </div>
      </section>

    {/* SERVICES */}
<section className="py-10 md:py-16 px-4 sm:px-6">
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-10">
    Our Services
  </h2>

  <div className="space-y-6 md:space-y-10 max-w-7xl mx-auto">
    {services.map((service, i) => (
      <div
        key={i}
        ref={(el) => (serviceRefs.current[i] = el)}
        className={`
          rounded-3xl flex flex-col md:flex-row
          items-center justify-between gap-6 md:gap-8
          transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
          py-2 md:py-4
          px-2 sm:px-4
          ${
            service.reverse
              ? "md:flex-row-reverse bg-gradient-to-r from-[#1d8c72] to-[#d9fff7] md:pl-16 lg:pl-24 md:pr-8"
              : "md:flex-row bg-gradient-to-l from-[#1d8c72] to-[#d9fff7] md:pl-8 md:pr-16 lg:pr-24"
          }
        `}
      >
        <img
          src={service.image}
          alt=""
          className="w-[220px] sm:w-[280px] md:w-[320px] lg:w-[360px] 
                     h-auto md:h-[300px] object-contain"
        />

        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold">
            {service.title}
          </h3>

          <button className="mt-6 md:mt-10 bg-white px-5 sm:px-6 md:px-8 py-2 md:py-3 rounded-full text-base sm:text-lg md:text-2xl font-medium transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            View Details
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

      <section  ref={reviewsRef} className="py-16 md:py-20 px-4 md:px-6 scroll-mt-24">
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-blue-500">
          Aidly Reviews
        </h2>
        <p className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">
          What Our User Says
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mt-12">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="shadow-lg rounded-xl p-4 bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-full h-52 object-cover rounded-lg"
              />

              <div className="text-yellow-500 text-center mt-3">★★★★★</div>

              <h3 className="font-bold text-center mt-3">{review.name}</h3>

              <p className="text-center text-sm mt-3">{review.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section ref={downloadRef} className="py-16 px-4 md:px-5 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center">
            <h2 className="text-3xl md:text-4xl font-bold">Download Aidly App:</h2>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <button
                onClick={() => setShowPopup(true)}
                className="w-full sm:w-auto bg-black text-white rounded-xl text-lg sm:text-2xl md:text-3xl flex items-center justify-center gap-3 px-6 py-5 md:py-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <FaGooglePlay className="text-3xl md:text-4xl" />
                Get on Google Play Store
              </button>

              <button
                onClick={() => setShowPopup(true)}
                className="w-full sm:w-auto bg-black text-white rounded-xl text-lg sm:text-2xl md:text-3xl flex items-center justify-center gap-3 px-6 py-5 md:py-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <FaApple className="text-3xl md:text-4xl" />
                Get on Apple App Store
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-5 mx-auto max-w-2xl">
          <a
            href="https://www.linkedin.com/company/aidly-in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 md:gap-3 bg-gradient-to-r from-[#B8B6FF] via-[#2F3FD8] to-[#B8B6FF] rounded-full py-4 px-4 text-base sm:text-lg md:text-3xl font-semibold transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            <span>Follow on LinkedIn for more updates</span>
            <FaLinkedin className="text-3xl shrink-0" />
          </a>

          <a
            href="https://www.instagram.com/aidly_in?igsh=MWxxMWt1cGoxNmdscA=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 md:gap-3 bg-gradient-to-r from-[#A64DFF] via-[#dac67f] to-[#A64DFF] rounded-full py-4 px-4 text-base sm:text-lg md:text-3xl font-semibold transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            <span>Follow on Instagram for more updates</span>
            <FaInstagram className="text-2xl shrink-0" />
          </a>

          <p className="text-lg sm:text-2xl md:text-3xl mt-10 font-bold text-center sm:text-left">
            Reach out to us:
            <a
              href="mailto:aidlyservice2025@gmail.com?subject=Inquiry about Aidly"
              className="text-blue-500 underline ml-2 hover:text-blue-700 break-all"
            >
              aidlyservice2025@gmail.com
            </a>
          </p>
        </div>
      </section>

      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999] px-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl text-center w-full max-w-[350px]">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Launching Soon 🚀</h2>
            <p className="text-gray-600 mb-5">
              Aidly app will be available soon on Google Play Store & Apple Store.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <p className="text-center mb-1 text-base sm:text-lg md:text-xl">
        © 2025 Aidly. All rights reserved.
      </p>
    </div>
  );
}