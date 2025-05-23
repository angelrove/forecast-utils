// hourlyParams

import { fetchParams as hourlyParams } from "../hourly/fetchParams.js";

export const fetchParams =
  "current=" +
  "temperature_2m," +
  "apparent_temperature," +
  "relative_humidity_2m," +
  "weather_code," +
  "wind_speed_10m," +
  "wind_direction_10m," +
  "precipitation&" +
  "&forecast_days=2" +
  "&daily=" +
  "temperature_2m_max," +
  "temperature_2m_min," +
  "precipitation_sum," +
  "showers_sum" +
  "&" +
  hourlyParams;
