import type { TData } from "./Home";

type propsData = {
  setSearch: (value: string) => void;
  setTextFa: (value: boolean) => void;
  fullData: TData | null;
};
const Weekly = ({ setSearch, fullData, setTextFa }: propsData) => {
  console.log(fullData);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearch(e.currentTarget.value);
    }

    if (/[\u0600-\u06FF]/.test(e.currentTarget.value)) {
      setTextFa(true);
    } else {
      setTextFa(false);
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center gap-5 p-3 rounded-lg backdrop-filter backdrop-blur-sm ">
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Search City..."
        className="border border-gray-100/50 focus:shadow-md shadow-white/30 duration-300 rounded-md py-2 px-3 w-[70%] outline-0"
      />
      <div className="flex flex-col items-center gap-3 border-t border-t-white w-[90%] "></div>
    </div>
  );
};

export default Weekly;
