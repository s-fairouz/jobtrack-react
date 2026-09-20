import { useState } from "react";
import { ThemeContext } from "../context/index.js";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  const value = {
    theme,
    toggleTheme,
  };
  return <ThemeContext value={value}>{children}</ThemeContext>;
};
