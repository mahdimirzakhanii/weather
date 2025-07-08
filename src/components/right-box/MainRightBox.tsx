import type { Location } from "../Home";
import Deatails from "./Deatails";
import Forecast from "./Forecast";
import SearchBox from "./SearchBox";

type Props = {
  location: Location | null;
  search: string;
  textFa: boolean;
  setSearch: (value: string) => void;
  setTextFa: (value: boolean) => void;
};

const MainRightBox = ({
  textFa,
  location,
  search,
  setSearch,
  setTextFa,
}: Props) => {
  return (
    <div className="flex flex-col items-center gap-5 md:gap-10 justify-center w-full">
      <SearchBox setSearch={setSearch} setTextFa={setTextFa} />
      <Deatails />
      <Forecast textFa={textFa} search={search} location={location} />
    </div>
  );
};

export default MainRightBox;
