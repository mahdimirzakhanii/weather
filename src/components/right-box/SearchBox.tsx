import { useState } from "react";
import { PiMagnifyingGlass } from "react-icons/pi";

type PropsSearch = {
  setSearch: (value: string) => void;
  setTextFa: (value: boolean) => void;
};

const SearchBox = ({ setSearch, setTextFa }: PropsSearch) => {
  const [searchInput, setSearchInput] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const value = e.currentTarget.value;
      setSearch(value);
      setTextFa(/[\u0600-\u06FF]/.test(value));
    }
  };

  const handleClick = () => {
    if (!searchInput) return;
    setSearch(searchInput);
    setTextFa(/[\u0600-\u06FF]/.test(searchInput));
  };

  return (
    <div className="h-full w-full flex items-center justify-between gap-5 pl-3 ">
      <input
        type="text"
        onKeyDown={handleKeyDown}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search"
        className="text-lg border-b border-b-white/20 duration-300 pb-1 px-3 w-[70%] outline-0"
      />
      <div className="flex items-center cursor-pointer bg-white/50 justify-center w-16 h-16">
        <PiMagnifyingGlass
          onClick={handleClick}
          className="text-3xl text-black"
        />
      </div>
    </div>
  );
};

export default SearchBox;
