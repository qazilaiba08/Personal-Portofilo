import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import { useState } from "react";
import LoadingScreen from "./Components/LoadingScreen";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Testimonail from "./pages/Testimonail";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 bg-black-900 text-gray-100 
       ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        <Navbar />
        <Home />
        <About className="bg-cyan-950" />
        <Experience />
        <Projects />
        <Testimonail />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

