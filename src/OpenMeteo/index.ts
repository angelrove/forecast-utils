/**
 * Use the OpenWeather forecast API
 * @module OpenMeteo
 *
 */

export { useForecastCurrent } from "./current/useForecastCurrent";
export { useForecastDaily } from "./daily/useForecastDaily";
export { useForecastDailyAll } from "./daily/useForecastDailyAll";
export { useForecastHourly } from "./hourly/useForecastHourly";
export type { ForecastData, WeatherSymbol } from "./types";
export { weatherSymbol } from "./weatherSymbol/weatherSymbol";

