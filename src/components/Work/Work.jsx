import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative bg-gradient-to-b from-[#0f0f0f] to-[#1f1f1f]"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white tracking-wide">
          <span className="text-purple-500">PROJECTS</span>
        </h2>
        <div className="w-16 h-1 bg-purple-500 mx-auto mt-4 rounded-full" />
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-xl mx-auto">
          A showcase of my projects, demonstrating skills in building robust applications using modern technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="bg-[#18181b] border border-purple-300/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-600/40 hover:scale-105 transform transition-all duration-300 cursor-pointer group"

          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-white text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-purple-900/30 text-purple-400 text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 overflow-auto">
          <div className="relative bg-[#1e1e1e] rounded-xl shadow-2xl w-full max-w-3xl mx-auto">

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-50 text-white text-4xl font-bold hover:text-purple-500 hover:scale-110 transition-transform"
              style={{
                background: "#1f1f1f",
                borderRadius: "50%",
                padding: "0.3rem 0.75rem",
                lineHeight: "1rem",
              }}
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="flex flex-col items-center p-6">
              <div className="w-full flex justify-center bg-transparent mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-auto max-h-[300px] object-contain rounded-xl shadow-xl mx-auto"
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 mb-6 text-sm md:text-base text-center">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#2a213d] text-purple-300 text-xs font-semibold rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 justify-center w-full">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 bg-gray-800 hover:bg-purple-700 text-gray-300 px-4 py-2 rounded-lg text-sm md:text-base font-semibold text-center transition-all"
                >
                  View Code
                </a>
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-lg text-sm md:text-base font-semibold text-center transition-all"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
