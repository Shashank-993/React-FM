import React from "react";
import { DayDropdown } from "./DropDowns";
import { getWeatherIcon } from "@/utils/weatherIcon";
import { WeatherContext } from "@/context/WeatherContext";
import { useContext } from "react";
import { Skeleton } from "./ui/skeleton";

const HourlyForecast = ({
  daily,
  selectedDay,
  setSelectedDay,
  hourlyForecast,
  formatHour,
  hourlyUnits
}) => {
  const {weatherLoading} = useContext(WeatherContext)
  if (weatherLoading) {
    return (
      <div className="flex flex-col rounded-3xl bg-(--neutral-800) p-(--space-s) gap-(--space-s)">
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-36" />
          <Skeleton className="h-10 w-32 rounded-lg" />
        </div>

        <div className="flex flex-col gap-(--space-s)">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-lg border border-(--neutral-600) bg-(--neutral-700) px-(--space-xs) py-(--space-3xs)"
            >
              <div className="flex items-center gap-3">
                <Skeleton className="w-10 h-10 rounded-full" />
                <Skeleton className="h-4 w-20" />
              </div>

              <Skeleton className="h-4 w-12" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-start rounded-3xl grow text-white bg-(--neutral-800) p-(--space-s) gap-(--space-s)">
      <div className="flex items-center justify-between">
        <h3 className="text-white text-(length:--fs-0)">Hourly forecast</h3>
        <DayDropdown
          daily={daily}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      </div>
      <div className="flex flex-col gap-(--space-s) grow overflow-y-scroll h-80 scrollbar scrollbar-track-transparent scrollbar-thumb-(--neutral-600)">
        {hourlyForecast.map((hour) => (
          <div
            key={hour.time}
            className="flex items-center justify-between px-(--space-xs) py-(--space-3xs) bg-(--neutral-700) border border-(--neutral-600) rounded-lg"
          >
            <div className="flex items-center gap-(--space-3xs)">
              <img
                src={getWeatherIcon(hour.weatherCode)}
                className="w-10 h-10"
                alt=""
              />
              <p>{formatHour(hour.time)}</p>
            </div>

            <p>
              {hour.temperature}
              {hourlyUnits?.temperature_2m}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
