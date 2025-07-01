import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

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
type IWeatherItems = {
  description: string;
  main: string;
  icon: string;
};

type TDataContext = {
  fullData: TData | null  ;
  setFullData: Dispatch<SetStateAction<TData | null>>;
};

const DataContext = createContext({} as TDataContext);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [fullData, setFullData] = useState<TData | null>(null);
  return (
    <DataContext.Provider value={{ fullData, setFullData }}>
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("error");
  return context;
};

export default useDataContext;
