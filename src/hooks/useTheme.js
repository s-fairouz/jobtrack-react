import { use } from "react";
import {  ThemeContext } from "../context/index.js";

export const useTheme = () => {
  const context = use(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};