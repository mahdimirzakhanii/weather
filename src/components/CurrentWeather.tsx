import useDataContext from "../context/context";

const CurrentWeather = () => {
  const { fullData } = useDataContext();
  const date = new Date();
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  return (
    <div className="flex flex-col gap-3 pt-7 md:pt-0 items-center md:items-start justify-center w-full">
      <span className="flex items-start font-bold text-7xl md:text-9xl ">
        {fullData?.main?.temp.toString().slice(0, 2)}
        <span className="text-7xl">°</span>
      </span>
      <div className="flex flex-col items-center md:items-start gap-5 w-full">
        <span className="text-4xl md:text-6xl font-bold">{fullData?.name}</span>
        <span className="text-xl md:text-2xl">{time}</span>
        <span className="text-xl md:text-2xl">{fullData?.weather[0]?.description}</span>
      </div>
    </div>
  );
};

export default CurrentWeather;
