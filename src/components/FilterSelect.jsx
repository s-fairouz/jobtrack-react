const FilterSelect = ({ value, onChange, options, icon:Icon }) => {
  return (
    <div className="relative flex-1 sm:flex-none">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full sm:w-auto pl-3.5 pr-8 py-2.5 bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-xl border border-slate-200 dark:border-slate-700/70 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-colors cursor-pointer appearance-none"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
          >
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-slate-400 dark:text-slate-500">
        <Icon size={14} />
      </div>
    </div>
  );
};

export default FilterSelect;
