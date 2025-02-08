import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-cyan-950 text-white p-10 md:p-12">
      <div id="Footer" className="flex flex-col md:flex-row justify-around items-center gap-6">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
          <h3 className="text-sm md:text-2xl font-normal">Feel Free To Reach Out!</h3>
        </div>
        <ul className="text-sm md:text-xl space-y-3">
          <li className="flex items-center gap-2">
            <MdOutlineEmail size={24} /> laibaqazi721@gmail.com
          </li>
          <li className="flex items-center gap-2">
          <a href="https://www.linkedin.com/in/laiba-qazi/"><CiLinkedin size={24} /> </a>
          </li>
          <li className="flex items-center gap-2">
          <a href="https://github.com/qazilaiba08"> <FaGithub size={24} /></a>
          </li>
        </ul>
      </div>
      <div className="text-center text-sm md:text-lg mt-6 border-t border-gray-500 pt-4">
        <p>© {new Date().getFullYear()} Created by <span className="font-semibold">Laiba Qazi</span></p>
      </div>
    </div>
  );
}

export default Footer;
