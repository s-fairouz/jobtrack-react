import { useState } from "react";
import { NavbarContext } from "../context/index.js";

export const NavbarProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  const value = {
    theme,
    toggleTheme,
  };
  return <NavbarContext value={value}>{children}</NavbarContext>;
};
