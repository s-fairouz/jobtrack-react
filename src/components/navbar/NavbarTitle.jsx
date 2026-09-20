import { HiOutlineMenuAlt2, HiOutlineX } from 'react-icons/hi'

const NavbarTitle = ({ menuOpen ,onMenuToggle}) => {
  return (
      <div className="flex items-center gap-3">
          <button
            id="header-menu-toggle"
            onClick={onMenuToggle}
            className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <HiOutlineX size={22} />
            ) : (
              <HiOutlineMenuAlt2 size={22} />
            )}
          </button>
  
          <h1 className="text-lg font-semibold text-slate-900 dark:text-white">
            Job List
          </h1>
        </div>
  )
}

export default NavbarTitle