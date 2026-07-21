import sun from "../assets/images/icon-sunny.webp";
import partlyCloudy from "../assets/images/icon-partly-cloudy.webp";
import whiteCloud from "../assets/images/icon-overcast.webp";
import fog from "../assets/images/icon-fog.webp";
import drizzle from "../assets/images/icon-drizzle.webp";
import rainy from "../assets/images/icon-rain.webp";
import snow from "../assets/images/icon-snow.webp";
import storm from "../assets/images/icon-storm.webp";

export const getWeatherIcon = (code) => {
  switch (code) {
    // Clear sky
    case 0:
      return sun;

    // Mainly clear / partly cloudy
    case 1:
    case 2:
      return partlyCloudy;

    // Overcast
    case 3:
      return whiteCloud;

    // Fog
    case 45:
    case 48:
      return fog;

    // Drizzle
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return drizzle;

    // Rain
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      return rainy;

    // Snow
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return snow;

    // Thunderstorm
    case 95:
    case 96:
    case 99:
      return storm;

    default:
      return partlyCloudy;
  }
};
