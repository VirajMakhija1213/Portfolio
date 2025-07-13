import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const menuItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Projects" },
  { id: "education", label: "Education" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // reduced threshold for better accuracy
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) observer.observe(section);
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-[7vw] md:px-[7vw] lg:px-[20vw] transition duration-300 ${
        isScrolled
          ? "bg-[#0b0b14]/70 backdrop-blur-md shadow-lg border-b border-[#8245ec]/20"
          : "bg-transparent"
      }`}
    >
      <div className="py-5 flex justify-between items-center text-white">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-extrabold cursor-pointer tracking-wide">
          <span className="text-[#8245ec]">&lt;</span>
          Viraj
          <span className="text-[#8245ec]">/</span>
          Makhija
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm lg:text-base font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition duration-300 ${
                activeSection === item.id
                  ? "text-[#8245ec] font-semibold"
                  : "text-gray-300 hover:text-[#8245ec]"
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/VirajMakhija1213"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8245ec] transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/viraj-makhija/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8245ec] transition"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-11/12 sm:w-4/5 bg-[#0b0b14] bg-opacity-90 backdrop-blur-md rounded-lg shadow-xl z-40 p-6 md:hidden">
          <ul className="flex flex-col items-center space-y-5 text-base font-medium text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`transition hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-6 pt-2">
              <a
                href="https://github.com/VirajMakhija1213"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/viraj-makhija/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
