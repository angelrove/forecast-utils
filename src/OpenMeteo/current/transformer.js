/**
 * Transforms the OpenMeteo API data into a more usable format.
 *
 * @param {{current: any, daily: any, hourly: any, latitude: number, longitude: number}} data - The data object to transform.
 * @returns {object|null} - The transformed data object or null if the input is invalid.
 */
export default function transformer(data) {
  if (!data) return null;

  const current = data.current;
  const daily = data.daily;

  return {
    city: null,
    country: null,
    time: new Date().toTimeString(),
    latitude: data.latitude,
    longitude: data.longitude,
    weather: {
      weathercode: current.weather_code,
      precipitation: current.precipitation,
      temperature: current.temperature_2m,
      feels_like: current.apparent_temperature,
      humidity: current.relative_humidity_2m,
      wind: {
        speed: Math.round(current.wind_speed_10m),
        deg: current.wind_direction_10m,
        // gust: ,
      },
      tem_max: daily.temperature_2m_max[0],
      tem_min: daily.temperature_2m_min[0],
      precipitation_sum: daily.precipitation_sum,
      showers_sum: daily.showers_sum,
      hourly: data.hourly,
    },
  };
}
