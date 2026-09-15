import { BsBell } from 'react-icons/bs'
import { useNavbar } from '../../hooks/useNavbar.js';

const NavbarNotification = () => {
    const context = useNavbar();
    const { theme } = context;
  return (
    <button
          id="header-notifications"
          className="relative p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 transition-colors cursor-pointer"
          aria-label="Notifications"
        >
          <BsBell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-pink-500 ring-2 ring-white dark:ring-slate-900 animate-pulse" />
        </button>
  )
}

export default NavbarNotification