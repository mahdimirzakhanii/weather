import { Slide, toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import axios from "axios";
import MainRightBox from "./right-box/MainRightBox";
import useDataContext from "../context/context";
import Loading from "./Loading";

export interface Location {
  latitude: number;
  longitude: number;
}

const Home = () => {
  const { fullData, setFullData } = useDataContext();

  const [search, setSearch] = useState<string>("");
  const [textFa, setTextFa] = useState<boolean>(true);
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    console.log("Getting your location... 🔍");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Location found 🎉");
        setLocation(position.coords);
      },
      (error) => {
        console.error(error);
        toast.error("Failed to get location", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          rtl: false,
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
            ? `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b0929da981a188d7739b38288dbfe378${
                textFa ? "&lang=fa" : "&lang=en"
              }`
            : `https://api.openweathermap.org/data/2.5/weather?lat=${
                location?.latitude
              }&lon=${
                location?.longitude
              }&appid=b0929da981a188d7739b38288dbfe378${
                textFa ? "&lang=fa" : "&lang=en"
              }`
        );
        console.log(res?.data);
        setFullData(res?.data);
      } catch (error) {
        console.log(error);
        toast.error("Not Found !", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          rtl: false,
          theme: "dark",
          transition: Slide,
        });
      }
    };
    getData();
  }, [location, search, textFa, setFullData]);

  return (
    <>
      {fullData === null ? (
        <Loading />
      ) : (
        <div
          className={`text-gray-200 bg-cover bg-no-repeat bg-center min-h-screen h-screen flex items-start justify-around 
      ${
        fullData?.weather[0]?.main === "Thunderstorm"
          ? " bg-[url(/rainy.jpg)]"
          : fullData?.weather[0]?.main === "Drizzle"
          ? " bg-[url(/rainy.jpg)]"
          : fullData?.weather[0]?.main === "Rain"
          ? " bg-[url(/rainy.jpg)]"
          : fullData?.weather[0]?.main === "Snow"
          ? " bg-[url(/snow.jpeg)]"
          : fullData?.weather[0]?.main === "Clear"
          ? " bg-[url(/sunny.jpg)]"
          : fullData?.weather[0]?.main === "Clouds"
          ? " bg-[url(/cloudy.jpg)]"
          : fullData?.weather[0]?.main === "Mist" ||
            fullData?.weather[0]?.main === "Haze" ||
            fullData?.weather[0]?.main === "Fog"
          ? " bg-[url(/mist.jpg)]"
          : (fullData?.weather[0]?.main === "Dust" ||
              fullData?.weather[0]?.main === "Sand" ||
              fullData?.weather[0]?.main === "Tornado") &&
            " bg-[url(/dust.jpg)]"
      }`}
        >
          <div className="w-full h-full bg-gradient-to-tr from-black/70 to-transparent absolute"></div>
          <div className="flex gap-5 md:gap-0 items-center justify-between flex-col md:flex-row w-full ">
            <div className="w-full md:pl-20 z-50">
              <CurrentWeather />
            </div>

            <div className="w-[90%] md:w-1/2 z-50 pb-10 md:pb-0 bg-black/40 min-h-full md:min-h-screen bg-clip-padding backdrop-filter backdrop-blur-lg ">
              <MainRightBox
                search={search}
                location={location}
                textFa={textFa}
                setSearch={setSearch}
                setTextFa={setTextFa}
              />
            </div>
          </div>
        </div>
      )}

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
    </>
  );
};

export default Home;
