import React from "react";
import { useRef, useEffect } from "react";
import { FaLinkedin, FaInstagram } from  "react-icons/fa";
import gsap from "gsap";

const AidlyContact = () => {

      const contactRef = useRef(null);

       useEffect(() => {
    gsap.from(contactRef.current, {
      y: -120,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <div ref={contactRef}
      className="min-h-screen w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6"
      style={{
        background:
          "radial-gradient(circle at center, #eefafa 0%, #b9e4e4 45%, #4f9d97 100%)",
      }}
    >
      {/* Heading */}
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-10 pt-18">
        Contact Us
      </h1>

      {/* Description */}
      <div className="max-w-7xl">
        <p className="text-black text-lg sm:text-xl md:text-xl lg:text-4xl leading-relaxed font-medium">
          We're here to help you whenever you need healthcare support. Whether
          you have questions about our services, need assistance with ambulance
          booking, want to schedule a doctor consultation, or require help with
          medical product delivery, our team is ready to assist you.
        </p>

        <p className="text-black text-lg sm:text-xl md:text-2xl lg:text-4xl leading-relaxed font-medium mt-4">
          At Aidly, we believe that accessible healthcare begins with effective
          communication. Reach out to us through any of the channels below, and
          our support team will respond as quickly as possible.
        </p>
      </div>

      {/* Contact Info */}
      <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
            📞 Phone:
          </h2>
          <p className="ml-6 md:ml-10 text-lg sm:text-xl md:text-2xl lg:text-4xl">
            +91 8873425828
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
            📧 Email:
          </h2>
       
            <a
              href="mailto:aidlyservice2025@gmail.com?subject=Inquiry about Aidly"
              className="ml-6 md:ml-10 break-all text-lg sm:text-xl md:text-2xl lg:text-4xl"
            >
              aidlyservice2025@gmail.com
            </a>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
            🕒 Support Hours:
          </h2>
          <p className="ml-6 md:ml-10 text-lg sm:text-xl md:text-2xl lg:text-4xl">
            24/7 Emergency Support
          </p>
          <p className="ml-6 md:ml-10 text-lg sm:text-xl md:text-2xl lg:text-4xl">
            Monday – Sunday
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
            📍 Address:
          </h2>
          <p className="ml-6 md:ml-10 text-lg sm:text-xl md:text-2xl lg:text-4xl">
            Sheikhpura City
          </p>
          <p className="ml-6 md:ml-10 text-lg sm:text-xl md:text-2xl lg:text-4xl">
            811105 Bihar
          </p>
        </div>
      </div>

      {/* Social Buttons */}
     <div className="mt-10 space-y-5 mx-auto max-w-2xl">
              <a
                href="https://www.linkedin.com/company/aidly-in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 md:gap-3 bg-gradient-to-r from-[#B8B6FF] via-[#2F3FD8] to-[#B8B6FF] rounded-full py-4 px-4 text-base sm:text-lg md:text-3xl font-semibold transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <span>Follow us on LinkedIn for more updates</span>
                <FaLinkedin className="text-3xl shrink-0" />
              </a>
    
              <a
                href="https://www.instagram.com/aidly_in?igsh=MWxxMWt1cGoxNmdscA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 md:gap-3 bg-gradient-to-r from-[#A64DFF] via-[#dac67f] to-[#A64DFF] rounded-full py-4 px-4 text-base sm:text-lg md:text-3xl font-semibold transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <span>Follow us on Instagram for more updates</span>
                <FaInstagram className="text-3xl shrink-0" />
              </a>
    
             
            </div>
    </div>
  );
};

export default AidlyContact;