import type { TData } from "./Home";

type propsData = {
  setSearch: (value: string) => void;
  setTextFa: (value: boolean) => void;
  fullData: TData | null;
};
const Search = ({ setSearch, fullData, setTextFa }: propsData) => {
  console.log(fullData);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearch(e.currentTarget.value);

      if (/[\u0600-\u06FF]/.test(e.currentTarget.value)) {
        setTextFa(true);
      } else {
        setTextFa(false);
      }
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center gap-5 p-3  ">
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Search City..."
        className="border border-gray-100/10 duration-300 rounded-md py-2 px-3 w-[70%] outline-0"
      />
    </div>
  );
};

export default Search;
