import { WeatherContext } from "@/context/WeatherContext";
import { getWeatherIcon } from "@/utils/weatherIcon";
import React from "react";
import { useContext } from "react";
import { Skeleton } from "./ui/skeleton";

const LocationCard = ({
  mobilebg,
  desktopbg,
  location,
  formattedDate,
  timezoneAbbreviation,
  timezone,
  current,
  apparent_temperature,
  units,
}) => {
  const {weatherLoading} = useContext(WeatherContext)
  if (weatherLoading) {
    return (
      <div className="relative rounded-3xl h-72 bg-(--neutral-800) border border-(--neutral-600) p-(--space-l) flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <Skeleton className="h-8 w-52 rounded-md" />
          <Skeleton className="h-4 w-72 rounded-md" />
          <Skeleton className="h-4 w-40 rounded-md" />
        </div>

        <div className="flex items-center gap-4 mt-8 lg:mt-0">
          <Skeleton className="w-28 h-28 rounded-full" />
          <Skeleton className="h-16 w-28 rounded-md" />
        </div>
      </div>
    );
  }
  return (
    <div className="relative rounded-3xl overflow-hidden h-72 flex flex-col justify-center gap-(--space-m) lg:flex-row lg:items-center lg:justify-between lg:px-(--space-l)">
      <picture className="z-0 absolute inset-0 ">
        <source media="(min-width: 768px)" srcSet={desktopbg} />
        <img
          src={mobilebg}
          className="object-cover w-full h-full"
          alt="today-bg"
        />
      </picture>
      <div className="flex flex-col z-10 relative text-center gap-(--space-2xs)">
        <h2 className="text-(length:--fs-3) text-white">
          {location?.name}, {location?.country}
        </h2>
        <div className="flex flex-col items-center lg:items-start">
          <p className="text-white">{formattedDate}</p>
          <p className="text-white">
            {timezoneAbbreviation} • {timezone}
          </p>
        </div>
      </div>
      <div className="flex justify-around z-10 relative items-center">
        <img
          src={getWeatherIcon(current?.weather_code)}
          className="w-30 h-30"
          alt="sun-icon"
        />
        <h2 className="italic text-(length:--fs-5) text-(--neutral-0)">
          {apparent_temperature}&nbsp;
          {units?.apparent_temperature}
        </h2>
      </div>
    </div>
  );
};

export default LocationCard;
