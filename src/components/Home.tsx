import { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Weekly from "./Weekly";
import axios from "axios";
import { Slide, toast, ToastContainer } from "react-toastify";

export type TData = {
  name: string;
  weather: IWeatherItems[];
  main: IMainItems;
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
  description: string;
  main: string;
  icon: string;
}

interface Location {
  latitude: number;
  longitude: number;
}

const Home = () => {
  const [fullData, setFullData] = useState<TData | null>(null);
  const [search, setSearch] = useState<string>("");
  const [textFa, setTextFa] = useState<boolean>(true);

  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("درخواست لوکیشن در حال ارسال است...");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("لوکیشن دریافت شد");
        setLocation(position.coords);
      },
      (error) => {
        console.error("خطا در گرفتن موقعیت جغرافیایی:", error);
        toast.error("خطا در گرفتن موقعیت جغرافیایی!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          rtl: true,
          theme: "dark",
          transition: Slide,
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);

  useEffect(() => {
    const getData = async () => {
      if (!location) return;
      try {
        const res = await axios.get(
          search
            ? `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b0929da981a188d7739b38288dbfe378&units=metric${
                textFa ? "&lang=fa" : "&lang=en"
              }`
            : `https://api.openweathermap.org/data/2.5/weather?lat=${
                location?.latitude
              }&lon=${
                location?.longitude
              }&appid=b0929da981a188d7739b38288dbfe378&units=metric${
                textFa ? "&lang=fa" : "&lang=en"
              }`
        );
        console.log(res?.data);
        setFullData(res?.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [location, search, textFa]);
  return (
    <div
      className={`text-white bg-cover  bg-no-repeat bg-center min-h-screen h-screen flex items-center justify-around
      ${
        fullData?.weather[0]?.main === "Thunderstorm"
          ? " bg-[url(/rainy-2.jpg)]"
          : fullData?.weather[0]?.main === "Drizzle"
          ? " bg-[url(/rainy-2.jpg)]"
          : fullData?.weather[0]?.main === "Rain"
          ? " bg-[url(/rainy-2.jpg)]"
          : fullData?.weather[0]?.main === "Snow"
          ? " bg-[url(/snow.jpg)]"
          : fullData?.weather[0]?.main === "Clear"
          ? " bg-[url(/sunny-4.jpg)]"
          : fullData?.weather[0]?.main === "Clouds"
          ? " bg-[url(/cloudy-1.jpg)]"
          : fullData?.weather[0]?.main === "Mist" && " bg-[url(/rainy-2.jpg)]"
      }`}
    >
      {/* <span>
        {"https://openweathermap.org/img/wn/" +
          fullData?.weather[0]?.icon +
          "@2x.png"}
      </span> */}
      <div className="basis-[20%]">
        <CurrentWeather fullData={fullData} />
      </div>
      <div className="basis-[40%] ">
        <Weekly
          setTextFa={setTextFa}
          setSearch={setSearch}
          fullData={fullData}
        />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Slide}
      />
    </div>
  );
};

export default Home;
