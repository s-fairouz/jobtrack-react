import { BsHeart, BsHeartFill } from "react-icons/bs";

const FavoriteButton = ({
  isFavorite,
  onToggle,
  iconSize = 16,
  className = "p-2.5",
}) => (
  <button
    type="button"
    onClick={onToggle}
    className={`rounded-xl border transition-all cursor-pointer ${className} ${
      isFavorite
        ? "bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400"
        : "border-slate-200 dark:border-slate-800 text-slate-400 hover:text-rose-500 hover:bg-slate-50 dark:hover:bg-slate-800"
    }`}
    aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    aria-pressed={isFavorite}
  >
    {isFavorite ? <BsHeartFill size={iconSize} /> : <BsHeart size={iconSize} />}
  </button>
);

export default FavoriteButton;
