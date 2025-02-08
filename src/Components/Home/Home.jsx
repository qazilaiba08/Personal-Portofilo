import avatarImg from "../../assets/7358602-removebg-preview.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="text-white flex flex-col-reverse md:flex-row w-full justify-between items-center px-10 md:px-20 py-16 md:py-28">
      <motion.div 
        className="md:w-2/4 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tighter">
          Hello, I am{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Laiba
          </span>
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mt-4">
          I am a passionate{" "}
          <span className="text-cyan-400 font-semibold">Frontend Developer</span>  
          dedicated to creating modern, responsive, and user-friendly web applications.
        </p>
        
        <motion.button 
          className="mt-6 md:mt-10 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-5 md:py-3 md:px-6 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.button>
      </motion.div>
      <motion.div 
        className="w-3/5 md:w-1/3 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img className="w-full rounded-full shadow-lg shadow-cyan-500/50" src={avatarImg} alt="Avatar" />
      </motion.div>
    </section>
  );
};

export default Home;
