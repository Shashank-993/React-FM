import React from "react";
import mobilebg from "../assets/images/bg-today-small.svg";
import desktopbg from "../assets/images/bg-today-large.svg";
import { useContext } from "react";
import { WeatherContext } from "@/context/WeatherContext";
/* icons to set weather code */
import { useState } from "react";
import { useEffect } from "react";
import LocationCard from "@/components/LocationCard";
import StatsCards from "@/components/StatsCards";
import DailyForecast from "@/components/DailyForecast";
import HourlyForecast from "@/components/HourlyForecast";
const Weather = () => {
  const { location, forecast } = useContext(WeatherContext);
  console.log(forecast);
  /* for the main location card with blue background */
  const current = forecast?.data?.current;
  const units = forecast?.data?.current_units;
  const {
    apparent_temperature,
    relative_humidity_2m,
    wind_speed_10m,
    precipitation,
  } = current ?? {};

  /* for daily forecast */
  const daily = forecast?.data?.daily;
  const dailyUnits = forecast?.data?.daily_units;
  const getDay = (date) =>
    new Date(date).toLocaleDateString("en-US", { weekday: "short" });

  /* timezone */
  const timezone = forecast?.data?.timezone;
  const timezoneAbbreviation = forecast?.data?.timezone_abbreviation;
  const currentTime = forecast?.data?.current?.time;
  const formattedDate = currentTime
    ? new Date(currentTime).toLocaleString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZone: timezone,
      })
    : "";

  /* hourly forecast data */
  const hourly = forecast?.data?.hourly;
  const hourlyUnits = forecast?.data?.hourly_units;
  const [selectedDay, setSelectedDay] = useState(daily?.time?.[0]);
  /* console.log("selectedDay:", selectedDay);
  console.log("first hourly:", hourly?.time?.[0]);
  console.log("daily:", daily?.time); */
  const hourlyForecast =
    hourly?.time
      ?.map((time, index) => ({
        time,
        temperature: hourly.temperature_2m[index],
        weatherCode: hourly.weather_code[index],
        precipitation: hourly.precipitation_probability[index],
      }))
      .filter((item) => item.time.split("T")[0] === selectedDay) ?? [];
  const formatHour = (time) =>
    new Date(time).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: timezone,
    });
  useEffect(() => {
    if (daily?.time?.length) {
      setSelectedDay(daily.time[0]);
    }
  }, [daily]);
  return (
    <section className="container flex flex-col w-[90%] xl:w-[83%] mx-auto gap-(--space-m) xl:flex-row xl:items-stretch">
      <div className="h-full flex flex-col grow gap-(--space-m) lg:gap-(--space-l)">
        {/* location */}
        <LocationCard
          mobilebg={mobilebg}
          desktopbg={desktopbg}
          location={location}
          formattedDate={formattedDate}
          timezoneAbbreviation={timezoneAbbreviation}
          timeZone={timezone}
          current={current}
          apparent_temperature={apparent_temperature}
          units={units}
        />
        {/* stats div */}
        <StatsCards
          apparent_temperature={apparent_temperature}
          units={units}
          relative_humidity_2m={relative_humidity_2m}
          wind_speed_10m={wind_speed_10m}
          precipitation={precipitation}
        />
        {/* daily forecast div */}
        <DailyForecast daily={daily} getDay={getDay} dailyUnits={dailyUnits} />
      </div>
      {/* hourly forecast sidebar */}
      <HourlyForecast
        daily={daily}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        hourlyForecast={hourlyForecast}
        formatHour={formatHour}
        hourlyUnits={hourlyUnits}
      />
    </section>
  );
};

export default Weather;
