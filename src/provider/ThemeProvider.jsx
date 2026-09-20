import { ThemeContext } from "../context/index.js";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme',true);
  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  const value = {
    theme,
    toggleTheme,
  };
  return <ThemeContext value={value}>{children}</ThemeContext>;
};
