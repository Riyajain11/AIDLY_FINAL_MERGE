import { useRef, useEffect } from "react";
import gsap from "gsap";

const AboutAidly = () => {
     const aboutRef = useRef(null);

       useEffect(() => {
    gsap.from(aboutRef.current, {
      y: -120,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);
  

  return (
    <div ref={aboutRef} className="w-full bg-gradient-to-b from-[#1A5F48] via-[#89C9CA] to-[#C6EBE8] px-4 sm:px-6 md:px-10 py-6 md:py-10">

      <h2 className="pt-15 md:pt-18 text-3xl sm:text-4xl md:text-[44px] font-bold text-white leading-tight mb-3">
        About Aidly
      </h2>

      <p className="text-base sm:text-lg md:text-[20px] font-semibold leading-relaxed text-black">
        <span className="font-bold">Aidly</span> Aidly is a next-generation healthcare platform designed to bridge the gap between
        patients and essential medical services through a single, integrated digital ecosystem. Our mission is to make healthcare
        more accessible, responsive, and convenient for everyone by bringing emergency care, medical consultations, home healthcare
        services, and medicine delivery together in one seamless platform
      </p>

      <p className="text-base sm:text-lg md:text-[20px] font-semibold leading-relaxed text-black mt-4 md:mt-6">
        In today's fast-paced world, accessing timely healthcare can be challenging, especially during emergencies.
        Aidly addresses this challenge by providing a smart and reliable healthcare solution that connects users with ambulances,
        doctors, healthcare professionals, and medical suppliers in real time. Whether it is an urgent medical emergency,
        a routine doctor consultation, home-based patient care, or the need for essential medical products, Aidly ensures that
        help is always just a few taps away.
      </p>

      <h2 className="pt-8 md:pt-18 text-3xl sm:text-4xl md:text-[44px] font-bold text-black leading-tight mb-3">
        Our Vision
      </h2>

      <p className="text-base sm:text-lg md:text-[20px] font-semibold leading-relaxed text-black mt-4 md:mt-6">
        To create a healthcare ecosystem where quality medical assistance is accessible to every individual,
        regardless of location, time, or circumstance. We envision a future where technology empowers healthcare providers
        and patients to connect instantly, resulting in faster response times, better patient outcomes, and improved overall
        healthcare experiences.
      </p>

      <h2 className="pt-8 md:pt-18 text-3xl sm:text-4xl md:text-[44px] font-bold text-black leading-tight mb-3">
        Our Mission
      </h2>

      <p className="text-base sm:text-lg md:text-[20px] font-semibold leading-relaxed text-black mt-4 md:mt-6">
        Our mission is to simplify healthcare access by leveraging technology to deliver efficient, transparent,
        and patient-centric services. We strive to provide reliable emergency support, professional medical consultations,
        convenient home healthcare solutions, and hassle-free medicine delivery through a unified platform.
      </p>

      <h2 className="pt-8 md:pt-18 text-3xl sm:text-4xl md:text-[44px] font-bold text-black leading-tight mb-5">
        Why Choose Aidly?
      </h2>

      <ul className="list-disc pl-5 sm:pl-8 pr-2 sm:pr-8 space-y-3 text-lg sm:text-xl md:text-2xl">
        <li><span className="font-bold">All-in-One Healthcare Solution</span> – Multiple healthcare services available on a single platform.</li>
        <li><span className="font-bold">Fast Emergency Response</span> – Quick access to ambulances and emergency support.</li>
        <li><span className="font-bold">Convenient Healthcare Access</span> – Consult doctors and access healthcare services anytime, anywhere.</li>
        <li><span className="font-bold">Patient-Centered Approach</span> – Designed to prioritize user safety, comfort, and convenience.</li>
        <li><span className="font-bold">Technology-Driven Efficiency</span> – Smart digital solutions that streamline healthcare delivery.</li>
        <li><span className="font-bold">Reliable and Accessible</span> – Healthcare support available whenever you need it.</li>
      </ul>

      <div className="w-fit font-bold text-center text-xl sm:text-2xl md:text-4xl mt-8 md:mt-12 mx-auto px-2">
        Aidly – Connecting People to Better Healthcare, Anytime and Anywhere.
      </div>
    </div>
  );
};

export default AboutAidly;