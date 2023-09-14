import '@fontsource/nunito/500.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <>
      <div className="ml-36">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-emerald-600 focus:ring-emerald-600 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
        </label>
      </div>
    </>
  );
};

export default Search;
