import { IoArrowForward } from "react-icons/io5";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="text-white bg-gradient-to-r from-black via-gray-900 to-black bg-opacity-60 shadow-lg rounded-lg p-10 md:p-16 mx-4 md:mx-20 my-10">
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
          {[
            { title: "Frontend Developer", desc: "Expert in React.js, Tailwind CSS, JavaScript, ES6, and Bootstrap. Passionate about creating smooth UI/UX experiences with a focus on performance and design." },
            { title: "Database Developer", desc: "Skilled in managing relational and NoSQL databases, optimizing queries, and ensuring efficient data structures." },
            { title: "Backend Developer", desc: "Exploring backend technologies like Node.js, Express.js, and MongoDB to build scalable and secure applications." },
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg bg-black bg-opacity-40 hover:bg-opacity-60 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <IoArrowForward size={30} className="mt-1 text-cyan-400 transition-all duration-300 hover:text-cyan-600" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">{item.title}</h3>
                <p className="text-sm md:text-md text-gray-300 leading-tight">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
