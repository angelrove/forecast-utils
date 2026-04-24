export default function transformer(data: { daily: any; hourly: any }): object | null {
  if (!data) return null;

  const newData = {
    time: data.daily.time,
    weathercode: data.daily.weather_code,
    tempMax: data.daily.temperature_2m_max,
    tempMin: data.daily.temperature_2m_min,
    windDirection: data.daily.winddirection_10m_dominant,
    windSpeed: data.daily.windspeed_10m_max,
    precipitation_sum: data.daily.precipitation_sum,
  };

  return newData;
}
