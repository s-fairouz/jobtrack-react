import React from "react";
import Navbar from "./Navbar";

const Header = ({ menuOpen, onMenuToggle }) => {
  return <Navbar menuOpen={menuOpen} onMenuToggle={onMenuToggle} />;
};

export default Header;