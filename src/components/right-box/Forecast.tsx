import { useEffect, useState } from "react";
import type { TData } from "../../context/context";
import type { Location } from "../Home";
import axios from "axios";

type DeatailsDataType = {
  city: CityDataDeatails;
  list: Omit<TData, "name">[];
};

interface CityDataDeatails {
  name: string;
}

type Props = {
  search: string;
  textFa: boolean;
  location: Location | null;
};

const Forecast = ({ textFa, location, search }: Props) => {
  const [deatailsData, setDeatailsData] = useState<DeatailsDataType | null>();
  useEffect(() => {
    const handleDeatails = async () => {
      try {
        const res = await axios.get(
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

  const slice = deatailsData?.list?.slice(0, 5);

  return (
    <div className="flex flex-col items-center gap-5 px-5 w-full">
      <div className="flex flex-col items-center justify-between gap-5 w-full">
        {slice?.map((item) => (
          <div className="flex  items-center justify-between w-full">
            <span className="text-white/60">
              {item?.dt_txt &&
                new Date(item.dt_txt).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: false,
                })}
            </span>
            <span>{item?.main?.temp.toString().slice(0, 2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
