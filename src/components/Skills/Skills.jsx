import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-12">
                    <span className="text-4xl font-bold text-purple-500">SKILLS</span>

      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
      <p className="text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto">
        A collection of my technical skills honed through diverse projects and real-world experience.
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-6 justify-center">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-[#1f1f25] backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 w-full sm:w-[48%] rounded-2xl border border-gray-300/20 shadow-[0_0_30px_2px_rgba(130,69,236,0.2)] hover:shadow-purple-500/30 transition-all transform hover:scale-[1.02]"
        >
          {/* Category Heading */}
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {category.title}
            </span>
          </h3>

          {/* Tilt Skill Grid */}
          <Tilt
  tiltMaxAngleX={15}
  tiltMaxAngleY={15}
  perspective={1000}
  scale={1.05}
  transitionSpeed={1200}
  gyroscope={true}
>
  <div className="flex flex-wrap gap-3 justify-center">
    {category.skills.map((skill) => (
      <div
        key={skill.name}
        className="flex items-center gap-2 border border-purple-700/40 rounded-full py-2 px-3 bg-[#29293d] hover:shadow-lg hover:shadow-purple-600/30 transition-all max-w-full whitespace-nowrap"
      >
        <img
          src={skill.logo}
          alt={`${skill.name} logo`}
          className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
        />
        <span className="text-sm sm:text-base font-medium text-gray-200">
          {skill.name}
        </span>
      </div>
    ))}
  </div>
</Tilt>

        </div>
      ))}
    </div>
  </section>
);

export default Skills;
