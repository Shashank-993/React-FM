import { searchQuery, weatherForecast } from "@/api/axios";
import { useDebounce } from "@/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { createContext } from "react";

export const WeatherContext = createContext();
export const WeatherProvider = ({ children }) => {
  /* Searchbar related logic */
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  const debouncedQuery = useDebounce(query, 400);
  const { data, isFetching } = useQuery({
    queryKey: ["searchResults", debouncedQuery],
    queryFn: () => searchQuery(debouncedQuery),
    enabled: debouncedQuery.trim().length > 0,
  });
  const results = data?.data?.results ?? [];
  const showDropDown = show && debouncedQuery.trim().length > 0;

  /* Rendering forecast for specific location logic*/
  const [location, setLocation] = useState(null);
  const selectLocation = (city) => {
    console.log("------SELECTING LOCATION---------", city);
    setLocation(city);
    setShow(false);
  };

  /* units state */
  const [units, setUnits] = useState({
    temperature: "celsius",
    windSpeed: "kmh",
    precipitation: "mm",
  });

  const {
    data: forecast,
    isFetching: weatherLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: [
      "weatherForecast",
      location?.latitude,
      location?.longitude,
      units,
    ],
    queryFn: () =>
      weatherForecast(location.latitude, location.longitude, units),
    enabled: !!location,
  });

  return (
    <WeatherContext.Provider
      value={{
        query,
        debouncedQuery,
        setQuery,
        setShow,
        isFetching,
        results,
        showDropDown,
        location,
        selectLocation,
        forecast,
        weatherLoading,
        units,
        setUnits,
        isError,
        error
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
