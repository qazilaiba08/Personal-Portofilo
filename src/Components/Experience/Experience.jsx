import { FaCss3, FaFigma, FaJs, FaHtml5, FaBootstrap, FaReact } from "react-icons/fa";
import { SiRedux, SiReactquery, SiMongodb, SiFirebase, SiTailwindcss } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-6 md:p-16">
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Experience</h1>
      <div className="flex flex-wrap items-center justify-center mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-6">
          {[
            { icon: <FaHtml5 color="#C84C05" size={50} />, key: "html" },
            { icon: <FaCss3 color="#143d60" size={50} />, key: "css" },
            { icon: <FaReact color="#143d57" size={50} />, key: "react" },
            { icon: <FaJs color="#EFB036" size={50} />, key: "js" },
            { icon: <FaBootstrap color="#4B164C" size={50} />, key: "bootstrap" },
            { icon: <FaFigma color="#C30E59" size={50} />, key: "figma" },
            { icon: <SiTailwindcss color="#81BFDA" size={50} />, key: "tailwind" },
            { icon: <SiMongodb color="#3E7B27" size={50} />, key: "mongodb" },
            { icon: <SiRedux color="#500073" size={50} />, key: "redux" },
            { icon: <SiReactquery color="#DF6D2D" size={50} />, key: "reactquery" },
            { icon: <SiFirebase color="#C84C05" size={50} />, key: "firebase" },
          ].map(({ icon, key }) => (
            <span key={key} className="p-4 bg-zinc-800 flex items-center justify-center rounded-2xl shadow-lg">
              {icon}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <div className="hidden md:block space-y-4">
          {[
            {
              company: "SMIT",
              role: "Web And App Development",
              duration: "Dec 2023 - Present",
              description: ["Learn and explore Web and App Development", "Learn and Work as a Student"],
              logo: "data:image/png;base64,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",
            },
            {
              company: "CodeCraftersHub",
              role: "Frontend Development",
              duration: "Aug 2024 - Oct 2024",
              description: ["Work as a Frontend Developer", "Work as an Intern"],
              logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEfCBWkNLMo-A/company-logo_200_200/company-logo_200_200/0/1719812375921/code_crafters_hub_logo?e=2147483647&v=beta&t=bzoyMRDj7C4C6rDptRpWnJWeLGk6Ql-0830wgQbR_E0",
            },
          ].map(({ company, role, duration, description, logo }, index) => (
            <div key={index} className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-6 items-center">
              {logo && <img src={logo} alt={company} className="w-16 h-16 object-cover rounded-md" />}
              <div className="text-white">
                <h2 className="text-lg font-semibold">{role}, {company}</h2>
                <p className="text-sm font-thin">{duration}</p>
                <ul className="text-sm p-2">
                  {description.map((item, idx) => (
                    <li key={idx}>- {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="block md:hidden space-y-4">
          {[
            { company: "SMIT", role: "Web & App Dev", duration: "Dec 2023 - Present" },
            { company: "CodeCraftersHub", role: "Frontend Dev", duration: "Aug 2024 - Oct 2024" },
          ].map(({ company, role, duration }, index) => (
            <div key={index} className="bg-slate-950 bg-opacity-45 rounded-lg p-4 text-white">
              <h2 className="text-lg font-semibold">{role}, {company}</h2>
              <p className="text-sm font-thin">{duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
