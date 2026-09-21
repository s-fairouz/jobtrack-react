import { useEffect } from "react";
import { ThemeContext } from "../context/index.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", true);
  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", !!theme);
  }, [theme]);
  const value = {
    theme,
    toggleTheme,
  };
  return <ThemeContext value={value}>{children}</ThemeContext>;
};
