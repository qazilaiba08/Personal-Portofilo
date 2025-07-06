import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white shadow-lg z-50">
      <div className="flex justify-between items-center px-6 md:px-20 py-4">
        <a href="#" className="text-2xl font-bold tracking-wide text-teal-400">
          Portfolio
        </a>

        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {["About", "Experience", "Projects", "Contact","Testmonail"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative hover:text-teal-400 transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-teal-400 after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#0f172a] transition-all duration-300 z-40 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } flex flex-col justify-center items-center gap-6 text-xl font-medium`}
      >
        <button
          className="absolute top-6 right-8 text-3xl text-white md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <RiCloseLine />
        </button>
        {["About", "Experience", "Projects", "Contact","Testmonail"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-teal-400 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
