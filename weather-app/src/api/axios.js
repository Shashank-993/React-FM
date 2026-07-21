import axios from "axios";

const geoApi = axios.create({
  baseURL: "https://geocoding-api.open-meteo.com/v1",
});

const weatherApi = axios.create({
  baseURL: "https://api.open-meteo.com/v1",
});

export const searchQuery = async (query) => {
  return await geoApi.get(
    `/search?name=${query.trim()}&count=5&language=en&format=json`,
  );
};

export const weatherForecast = async (lat, lon, units) => {
  return await weatherApi.get(
    `/forecast?latitude=${lat}&longitude=${lon}
    &current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m
    &daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,sunrise,sunset,precipitation_sum
    &hourly=temperature_2m,weather_code,precipitation_probability
    &temperature_unit=${units.temperature}
    &wind_speed_unit=${units.windSpeed}
    &precipitation_unit=${units.precipitation}
    &timezone=auto
    &forecast_days=7`.replace(/\s+/g, ""),
  );
};
