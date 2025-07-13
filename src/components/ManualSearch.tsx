import { useState } from "react";

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

  //   const handleClick = () => {
  //     if (!searchInput) return;
  //     setSearch(searchInput);
  //     setTextFa(/[\u0600-\u06FF]/.test(searchInput));
  //   };
  return (
    <div className="w-full min-h-[90vh] flex gap-5 items-center justify-center flex-col">
      <span>Enter Your Location:</span>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search"
        className="text-lg border border-gray-200 focus:border-gray-400 duration-500 rounded-md py-1.5 px-3 w-[40%] outline-0"
      />
    </div>
  );
};

export default ManualSearch;
