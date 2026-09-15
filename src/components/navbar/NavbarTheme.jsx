import { BsSun, BsMoon } from "react-icons/bs";
import { useNavbar } from "../../hooks/useNavbar.js";

const NavbarTheme = () => {
  const context = useNavbar();
  const { theme, toggleTheme } = context;
  return (
    <button
      onClick={toggleTheme}
      id="header-theme-toggle"
      className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 transition-colors cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme ? <BsMoon size={18} /> : <BsSun size={18} />}
    </button>
  );
};

export default NavbarTheme;
