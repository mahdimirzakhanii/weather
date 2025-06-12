import { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Weekly from "./Weekly";
import axios from "axios";

export type TData = {
  name: string;
  weather: IWeatherItems[];
  main: IMainItems;
  // win
};
interface IMainItems {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}
interface IWeatherItems {
  description: "scattered clouds";
  main?: "Clouds";
}

const Home = () => {
  const [fullData, setFullData] = useState<TData | null>(null);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b0929da981a188d7739b38288dbfe378&units=metric`
        );
        console.log(res?.data);
        setFullData(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [search]);
  return (
    <div
      className={`text-white bg-[url(/rainy-2.jpg)] bg-cover min-h-screen h-screen flex items-center justify-around`}
    >
      <div className="basis-[20%]">
        <CurrentWeather fullData={fullData} />
      </div>

      <div className="basis-[40%] ">
        <Weekly setSearch={setSearch} fullData={fullData} />
      </div>
    </div>
  );
};

export default Home;
