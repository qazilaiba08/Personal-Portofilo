import AboutImg from "../../assets/7358653-removebg-preview.png";
import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  { name: "React.js", level: 90 },
  { name: "Tailwind CSS", level: 85 },
  { name: "JavaScript (ES6+)", level: 88 },
  { name: "Node.js", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "Express.js", level: 70 },
  { name: "Bootstrap", level: 80 },
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "Git & GitHub", level: 80 },
  { name: "RESTful APIs", level: 75 },
  { name: "Responsive Design", level: 90 },
  { name: "UI/UX Design", level: 80 },
  { name: "NextJS", level: 50 },
  { name: "Problem Solving", level: 85 },
  { name: "TypeScript", level: 60 },
];

const aboutParagraph = `I'm a passionate MERN Stack Developer with a love for building beautiful, performant, and user-friendly web applications. My journey in tech started with curiosity and has grown into a deep commitment to clean code, modern UI, and continuous learning. I thrive on challenges and enjoy collaborating with others to bring ideas to life.`;


export default function AboutSection () {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <section id="about" className="text-white bg-gradient-to-r from-black via-gray-900 to-black bg-opacity-60 shadow-lg rounded-lg p-10 md:p-16 mx-4 md:mx-20 my-10">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <div className="md:flex items-center justify-center gap-10">
        {/* Profile Image */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img className="w-60 md:w-80 rounded-full shadow-md shadow-cyan-500/50" src={AboutImg} alt="About Me" />
        </motion.div>

        {/* Description & Skills */}
        <motion.div
          className="w-full md:w-2/3 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-4 bg-black bg-opacity-30 p-4 rounded-lg shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {aboutParagraph}
          </motion.p>

          <button
            onClick={() => setShowSkills((prev) => !prev)}
            className="mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-white font-semibold shadow hover:scale-105 transition-all duration-300"
          >
            {showSkills ? "Hide Skills" : "Show Skills"}
          </button>

          {showSkills && (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-cyan-300">{skill.name}</span>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 mt-1">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-pink-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
