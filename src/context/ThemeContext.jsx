/* eslint-disable react/prop-types*/
import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext(); 

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>  
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
