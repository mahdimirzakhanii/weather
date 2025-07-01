import axios from "axios";
import { useEffect, useState } from "react";
import type { TData } from "../../context/context";
import type { Location } from "../Home";

type DeatailsDataType = {
  city: CityDataDeatails;
  list: Omit<TData[], "name">[];
};

interface CityDataDeatails {
  name: string;
}

type Props = {
  search: string;
  textFa: boolean;
  location: Location | null;
};

const Deatails = ({ textFa, location, search }: Props) => {
  const [deatailsData, setDeatailsData] = useState<DeatailsDataType | null>();
  useEffect(() => {
    const handleDeatails = async () => {
      try {
        const res = await axios.get(
          // `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=b0929da981a188d7739b38288dbfe378`
          search
            ? `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=b0929da981a188d7739b38288dbfe378${
                textFa ? "&lang=fa" : "&lang=en"
              }`
            : `https://api.openweathermap.org/data/2.5/forecast?lat=${
                location?.latitude
              }&lon=${
                location?.longitude
              }&appid=b0929da981a188d7739b38288dbfe378${
                textFa ? "&lang=fa" : "&lang=en"
              }`
        );
        console.log(res?.data);
        setDeatailsData(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleDeatails();
  }, [search, location]);

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="flex items-center justify-between w-full">
        <span>asd</span>
        <span>asd</span>
      </div>
    </div>
  );
};

export default Deatails;
