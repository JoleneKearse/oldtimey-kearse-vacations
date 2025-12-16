type SearchBarProps = {
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ handleSearchChange }: SearchBarProps) => {
  return <input type="text" name="search" id="search" className="border-2 border-stone-400 rounded-4xl px-6 py-1 text-2xl font-light text-stone-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 placeholder:opacity-75 placeholder:text-stone-400" placeholder="Search photos" onChange={handleSearchChange} />;
};

export default SearchBar;
