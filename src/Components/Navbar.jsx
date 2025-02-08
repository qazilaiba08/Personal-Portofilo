import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-sky-950 text-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        <a href="#" className="text-2xl font-bold tracking-wide text-cyan-400">
          Portfolio
        </a>
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {["About", "Experience", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="relative hover:text-cyan-400 transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-cyan-400 after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>
      <div
        className={`absolute top-0 left-0 w-full bg-sky-950 transition-all duration-300 ${
          menuOpen ? "h-screen opacity-100" : "h-0 opacity-0 pointer-events-none"
        } flex flex-col justify-center items-center gap-6 text-xl font-medium`}
      >
        {["About", "Experience", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="hover:text-cyan-400 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
