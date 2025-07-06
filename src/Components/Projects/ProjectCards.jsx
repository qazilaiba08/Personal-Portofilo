import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="bg-black bg-opacity-40 p-6 rounded-lg shadow hover:scale-105 hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-between"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl md:text-2xl font-semibold text-teal-400 mb-4">
        {project.title}
      </h3>
      <p className="text-gray-300 mb-6">{project.desc}</p>

      <div className="flex gap-4">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:text-pink-500 flex items-center gap-2"
        >
          Live Demo <FaExternalLinkAlt />
        </a>
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:text-teal-500 flex items-center gap-2"
        >
          Code <FaGithub />
        </a>
      </div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,
};
