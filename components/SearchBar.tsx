type SearchBarProps = {
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
};

const SearchBar = ({ handleSearchChange, value }: SearchBarProps) => {
  return <input type="text" name="search" id="search" className="
 w-3/5 lg:w-full border-2 border-stone-400 rounded-4xl px-6 py-1 text-base lg:text-2xl font-light text-stone-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 placeholder:opacity-75 placeholder:text-stone-400" placeholder="Find photos" onChange={handleSearchChange} value={value} />;
};

export default SearchBar;
