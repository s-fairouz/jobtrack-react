import { use } from "react";
import { NavbarContext } from "../context/index.js";

export const useNavbar = () => {
  const context = use(NavbarContext);
  if (!context) throw new Error("useNavbar must be used within a NavbarProvider");
  return context;
};