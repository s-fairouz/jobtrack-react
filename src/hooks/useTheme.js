import { use } from "react";
import {  ThemeContext } from "../context/index.js";

export const useTheme = () => {
  const context = use(ThemeContext);
  if (!context) throw new Error("useNavbar must be used within a NavbarProvider");
  return context;
};