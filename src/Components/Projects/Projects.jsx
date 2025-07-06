import { motion } from "framer-motion";
import ProjectCard from "./ProjectCards"; // Fixed import: should match the actual file name

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black text-white" id="projects">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center text-teal-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "MERN E-Commerce Website",
              desc: "Full-stack responsive e-commerce platform with React, Node.js, Express, and MongoDB. Features product listings, authentication, and cart functionality.",
              live: "https://mern-ecommerce-demo.netlify.app",
              code: "https://github.com/qazilaiba08/MERN-E-Commerce-Website"
            },
            {
              title: "Quote Generator",
              desc: "Thoughtful quote generator using React, Tailwind CSS, and Ninja API. Includes copy, delete, and edit functionality with responsive design.",
              live: "https://quote-generator-laiba.netlify.app",
              code: "https://github.com/qazilaiba08/quote-generator"
            },
            {
              title: "Daily Goals Tracker",
              desc: "React app to track daily goals with add, delete, complete functionality and a motivational quote fetched from an API.",
              live: "https://daily-goals-laiba.netlify.app",
              code: "https://github.com/qazilaiba08/daily-goals-tracker"
            }
          ].map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
