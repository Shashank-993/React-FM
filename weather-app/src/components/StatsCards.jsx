import { WeatherContext } from "@/context/WeatherContext";
import React from "react";
import { useContext } from "react";
import { Skeleton } from "./ui/skeleton";

const StatsCards = ({
  apparent_temperature,
  units,
  relative_humidity_2m,
  wind_speed_10m,
  precipitation,
}) => {
    const {weatherLoading} = useContext(WeatherContext)
    if (weatherLoading) {
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-(--space-s)">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl bg-(--neutral-800) border border-(--neutral-600) p-(--space-s)"
            >
              <Skeleton className="h-4 w-24 mb-6" />
              <Skeleton className="h-10 w-28" />
            </div>
          ))}
        </div>
      );
    }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-(--space-s)">
      <div className="rounded-xl bg-(--neutral-800) border border-(--neutral-600) p-(--space-s) text-white space-y-s">
        <h3>Feels like</h3>
        <p className="text-(length:--fs-3)">
          {apparent_temperature}&nbsp;
          {units?.apparent_temperature}
        </p>
      </div>
      <div className="rounded-xl bg-(--neutral-800) border border-(--neutral-600) p-(--space-s) text-white space-y-s">
        <h3>Humidity</h3>
        <p className="text-(length:--fs-3)">
          {relative_humidity_2m}&nbsp;
          {units?.relative_humidity_2m}
        </p>
      </div>
      <div className="rounded-xl bg-(--neutral-800) border border-(--neutral-600) p-(--space-s) text-white space-y-s">
        <h3>Wind Speed</h3>
        <p className="text-(length:--fs-3)">
          {wind_speed_10m}&nbsp;
          {units?.wind_speed_10m}
        </p>
      </div>
      <div className="rounded-xl bg-(--neutral-800) border border-(--neutral-600) p-(--space-s) text-white space-y-s">
        <h3>Precipitation</h3>
        <p className="text-(length:--fs-3)">
          {precipitation}&nbsp;
          {units?.precipitation}
        </p>
      </div>
    </div>
  );
};

export default StatsCards;
