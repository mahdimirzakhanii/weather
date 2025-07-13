import useDataContext from "../../context/context";

const Deatails = () => {
  const { fullData } = useDataContext();
  return (
    <div className="flex flex-col items-center gap-2 md:gap-5 last:gap-20 px-5 w-full">
      <div className="flex items-center justify-between w-full">
        <span className="text-white/60">Feels Like</span>
        <div className="flex items-center gap-1">
          <span>
            {fullData?.main?.feels_like &&
              Math.floor(fullData?.main?.feels_like)}
          </span>
          <span className="text-lg">°</span>
        </div>
      </div>

      <div className="flex items-center justify-between w-full">
        <span className="text-white/60">Humidity</span>
        <div className="flex items-center gap-1">
          <span>
            {fullData?.main?.humidity && Math.floor(fullData?.main?.humidity)}
          </span>
          <span className="text-lg">%</span>
        </div>
      </div>

      <div className="flex items-center justify-between w-full">
        <span className="text-white/60">Wind Speed</span>
        <div className="flex items-center gap-1">
          <span>
            {fullData?.wind?.speed && Math.floor(fullData?.wind?.speed)}
          </span>
          <span className="text-lg">km/h</span>
        </div>
      </div>

      <div className="flex items-center justify-between w-full">
        <span className="text-white/60">Temp Min</span>
        <div className="flex items-center gap-1">
          <span>
            {fullData?.main?.temp_min && Math.floor(fullData?.main?.temp_min)}
          </span>
          <span className="text-lg">°</span>
        </div>
      </div>

      <div className="flex items-center justify-between w-full">
        <span className="text-white/60">Temp Max</span>
        <div className="flex items-center gap-1">
          <span>
            {fullData?.main?.temp_max && Math.floor(fullData?.main?.temp_max)}
          </span>
          <span className="text-lg">°</span>
        </div>
      </div>
      <div className="border-b-2 border-b-white/20 pb-5 w-full"></div>
    </div>
  );
};

export default Deatails;
