import { BsMoon } from "react-icons/bs";

const NavbarTheme = () => {
  return (
    <button
      id="header-theme-toggle"
      className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 transition-colors cursor-pointer"
      aria-label="Toggle theme"
    >
      <BsMoon size={18} />
    </button>
  );
};

export default NavbarTheme;
