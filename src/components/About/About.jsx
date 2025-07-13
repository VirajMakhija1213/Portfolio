import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-[#0b0b14]"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
            Hey, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-purple-500 leading-tight mb-4">
            Viraj Makhija
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-400 mb-6">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "Full-Stack Web Developer",
                "Proficient in Data Structures.",
                "Problem-Solving Enthusiast.",
                "Coder.",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-purple-500">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 leading-relaxed mb-8">
            I'm a passionate Full-Stack Developer with hands-on experience in
            building modern, scalable web applications using the MERN stack.
            With a strong foundation in frontend & backend technologies and over
            1000+ LeetCode problems solved (Rating: 1725), I bring both
            performance and clean code architecture to the table. I enjoy
            transforming concepts into real-world products and constantly strive
            to stay ahead in the ever-evolving tech landscape.
          </p>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-3 px-8 rounded-full text-white text-lg font-bold transition-transform hover:scale-105 shadow-xl"
            style={{
              background: "linear-gradient(to right, #8245ec, #a855f7)",
              boxShadow: "0 0 8px #8245ec, 0 0 30px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-44 h-44 sm:w-60 sm:h-60 md:w-[25rem] md:h-[25rem] border-[6px] border-purple-600 rounded-full shadow-lg"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Viraj Makhija"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
