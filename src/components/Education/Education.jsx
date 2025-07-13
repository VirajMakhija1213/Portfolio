import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <span className="text-4xl font-bold text-purple-500 tracking-wide">EDUCATION</span>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-gradient-to-b from-purple-400 to-transparent h-full z-0"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 relative z-10 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 bg-[#1f1f2e] rounded-2xl border border-gray-300/20 shadow-[0_0_25px_2px_rgba(130,69,236,0.15)] backdrop-blur-md transform transition-transform hover:scale-[1.03] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8`}
            >
              {/* Top Row - Image + Info */}
              <div className="flex items-center space-x-6 mb-4">
                {/* School Logo */}
                <div className="w-20 h-20 bg-white p-2 rounded-xl shadow-inner">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* School Details */}
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{edu.degree}</h3>
                  <h4 className="text-sm sm:text-base text-purple-400">{edu.school}</h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              {/* Grade */}
              <div className="mb-3">
                <span className="inline-block bg-purple-600/20 border border-purple-400 text-purple-300 text-xs font-medium px-3 py-1 rounded-full">
                  Grade: {edu.grade}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
