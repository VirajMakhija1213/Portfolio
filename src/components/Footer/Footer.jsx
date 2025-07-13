import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white bg-[#111827] bg-opacity-80 backdrop-blur-md py-10 px-[12vw] md:px-[7vw] lg:px-[20vw] border-t border-gray-700">
      <div className="container mx-auto text-center space-y-6">

        {/* Logo / Name */}
        <h2 className="text-2xl font-bold text-purple-500 tracking-wide">Viraj Makhija</h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-2">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="relative text-sm sm:text-base text-gray-300 hover:text-purple-500 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-4">
          {[
            { icon: <FaGithub />, link: "https://github.com/VirajMakhija1213" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/viraj-makhija/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/viraj_makhija_" },
            { icon: <FaEnvelope />, link: "mailto:makhijaviraj@gmail.com" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-300 hover:text-purple-500 transition-transform transform hover:scale-125"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700 mt-6"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-2">
          © 2025 <span className=" font-medium">Viraj Makhija</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
