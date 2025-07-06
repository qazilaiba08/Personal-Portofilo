import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import avatarImg from "../../assets/7358602-removebg-preview.png";


const resumeUrl = "/resume.pdf";

export default function HeroSection() {
    // Function to handle resume download
  const handleResumeDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Laiba_Qazi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] px-4 py-10 md:py-0">
      {/* Left: Text Content */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
        >
          Hi, I am <span className="text-pink-400">Laiba</span>
          <br />
          <span className="bg-gradient-to-r from-teal-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
            MERN Stack Developer
          </span>
        </motion.h1>

        <TypeAnimation
          sequence={[
            "React Enthusiast 🚀",
            2000,
            "Frontend Developer 💻",
            2000,
            "Lifelong Learner 🌟",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="block text-xl md:text-2xl font-semibold text-teal-300 drop-shadow-lg"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-300 max-w-xl text-base md:text-lg"
        >
          I build beautiful, performant web apps with a focus on clean code, modern
          UI, and seamless user experience. Lets create something amazing
          together!
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
          <Button
            className="bg-gradient-to-r from-teal-400 to-pink-400 hover:from-pink-400 hover:to-yellow-400 text-white px-8 py-3 text-lg font-semibold shadow-lg transition-all duration-300"
            as="a"
            href="#projects"
          >
            View Projects
          </Button>
          <Button
            className="bg-gradient-to-r from-yellow-400 to-teal-400 hover:from-pink-400 hover:to-yellow-400 text-white px-8 py-3 text-lg font-semibold shadow-lg transition-all duration-300"
            as="a"
            href={resumeUrl}
            download="Laiba_Qazi_Resume.pdf"
            onClick={handleResumeDownload}
          >
            Download Resume
          </Button>
        </div>
      </div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center items-center mb-10 md:mb-0"
      >
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-tr from-pink-400 via-teal-400 to-yellow-400 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
          <img
            src={avatarImg}
            alt="Laiba Qazi"
            className="relative w-48 h-48 md:w-72 md:h-72 rounded-full object-cover shadow-2xl border-4 border-teal-400"
          />
        </div>
      </motion.div>
    </section>
  );
}