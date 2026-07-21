import { WeatherContext } from '@/context/WeatherContext'
import { getWeatherIcon } from '@/utils/weatherIcon'
import React from 'react'
import { useContext } from 'react'
import { Skeleton } from './ui/skeleton'

const DailyForecast = ({daily, getDay, dailyUnits}) => {
    const {weatherLoading} = useContext(WeatherContext)
    if (weatherLoading) {
      return (
        <div className="space-y-m">
          <Skeleton className="h-8 w-44" />

          <div className="grid grid-cols-3 gap-(--space-s) lg:grid-cols-7">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl bg-(--neutral-800) border border-(--neutral-600) p-(--space-2xs) flex flex-col items-center gap-4"
              >
                <Skeleton className="h-4 w-16" />
                <Skeleton className="w-18 h-18 rounded-full" />
                <div className="flex justify-between w-full">
                  <Skeleton className="h-4 w-10" />
                  <Skeleton className="h-4 w-10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  return (
    <div className="space-y-m">
              <h2 className="text-white text-(length:--fs-1)">Daily forecast</h2>
              <div className="grid grid-cols-3 gap-(--space-s) lg:grid-cols-7">
                {daily?.time.map((date, index) => (
                  <div
                    key={date}
                    className="rounded-xl bg-(--neutral-800) border border-(--neutral-600) p-(--space-3xs) md:p-(--space-2xs) text-white space-y-s flex flex-col items-center"
                  >
                    <h3>{getDay(date)}</h3>
    
                    <img
                      src={getWeatherIcon(daily.weather_code[index])}
                      className="w-18 h-18"
                      alt="weather-icon"
                    />
    
                    <div className=" w-full flex items-center justify-between">
                      <span className="text-sm">
                        {daily.temperature_2m_max[index]}
                        {dailyUnits?.temperature_2m_max}
                      </span>
                      <span className="text-sm">
                        {daily.temperature_2m_min[index]}
                        {dailyUnits?.temperature_2m_min}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  )
}

export default DailyForecast