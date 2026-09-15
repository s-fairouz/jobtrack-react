import User from "../User.jsx";
import MenuDropdown from "./MenuDropdown.jsx";
import NavbarNotification from "./NavbarNotification.jsx";
import NavbarTheme from "./NavbarTheme.jsx";
import NavbarTitle from "./NavbarTitle.jsx";

const Navbar = ({ menuOpen, onMenuToggle }) => {
  return (
    <header className="relative z-30 h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 md:px-6 flex items-center justify-between shadow-xs shrink-0">
      <NavbarTitle menuOpen={menuOpen} onMenuToggle={onMenuToggle} />

      <div className="flex items-center gap-2 md:gap-3">
        <NavbarTheme />

        <NavbarNotification />

        <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1" />

        <User />
      </div>

      {menuOpen && <MenuDropdown menuOpen={menuOpen} />}
    </header>
  );
};

export default Navbar;
