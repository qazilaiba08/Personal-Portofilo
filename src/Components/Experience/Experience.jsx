import { motion } from "framer-motion";
import { IoBriefcaseOutline } from "react-icons/io5";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] text-white">
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center text-teal-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {[
            {
              title: "Frontend Intern - Nexium AI",
              period: "2024 - Present",
              desc: "Developing AI-powered web interfaces with React, Shadcn UI, and modern frontend technologies. Focused on responsive design and performance."
            },
            {
              title: "MERN Stack Developer - Freelance",
              period: "2023 - Present",
              desc: "Building scalable full-stack applications using the MERN stack. Hands-on with React, Node.js, Express, and MongoDB."
            },
            {
              title: "Frontend Trainee - SMIT Program",
              period: "2023",
              desc: "Completed practical training in React.js, JavaScript, and UI/UX fundamentals. Developed real-world projects with responsive designs."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-6 bg-black bg-opacity-40 p-6 rounded-lg hover:bg-opacity-60 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <IoBriefcaseOutline size={40} className="text-teal-400" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">{item.title}</h3>
                <p className="text-sm md:text-md text-gray-300">{item.period}</p>
                <p className="mt-2 text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

