import type { TData } from "./Home";

interface propsData {
  fullData: TData | null;
}

const CurrentWeather = ({ fullData }: propsData) => {
  const date = new Date();
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className="flex flex-col gap-3 items-center justify-center w-full">
      <span className="flex items-start text-9xl ">
        {fullData?.main?.temp.toString().slice(0, 2)}
        <span className="text-3xl">°C</span>
      </span>
      <span className="text-6xl font-bold">{fullData?.name}</span>
      <div className="flex justify-center w-full">
        <span className="text-2xl">{time}</span>
      </div>
      <span className="text-2xl">{fullData?.weather[0]?.description}</span>
    </div>
  );
};

export default CurrentWeather;
