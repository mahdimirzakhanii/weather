import { useState } from "react";
import { PiMagnifyingGlass } from "react-icons/pi";

type Props = {
  setSearch: (value: string) => void;
  setTextFa: (value: boolean) => void;
};

const ManualSearch = ({ setSearch, setTextFa }: Props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const value = e.currentTarget.value;
      setSearch(value);
      setTextFa(/[\u0600-\u06FF]/.test(value));
    }
  };

  return (
    <div className="w-full min-h-[90vh] flex gap-5 items-center justify-center flex-col">
      <span className="text-4xl flex items-center justify-center font-serif bg-gradient-to-r from-[#f00c00] to-[#2202a4] text-transparent bg-clip-text">
        Enter Your Location:
      </span>
      <div className="relative flex items-center juce w-[90%] md:w-[60%] lg:w-[40%]">
      <input
        type="text"
        onKeyDown={handleKeyDown}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search Location"
        className="text-lg border border-gray-200 text-gray-600 shadow-xl focus:shadow-sm duration-500 rounded-md py-2 px-3 w-full outline-0"
      />
      <PiMagnifyingGlass className="absolute right-5 text-xl text-gray-600"/>
    </div>
    </div>
  );
};

export default ManualSearch;
