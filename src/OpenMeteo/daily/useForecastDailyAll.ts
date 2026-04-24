import useSWR from "swr";
import { fetcher, getPath } from "../conf.js";
import { fetchParams as fetchParamsHourly } from "../hourly/fetchParams.js";
import type { ForecastData } from "../types.js";
import { fetchParams as fetchParamsDaily } from "./fetchParams.js";

/**
 * Custom hook to fetch daily forecast (10 days) data from OpenMeteo API.
 * https://api.open-meteo.com/v1/forecast?timezone=auto&latitude=36.6644363&longitude=-4.5108962&forecast_days=10&daily=weathercode
 */
export function useForecastDailyAll(
  lat: number | false | null,
  lon: number | false | null,
  // refreshIntervalMin: number = 0
): ForecastData
  {

  // Lógica de validación ---
  const shouldFetch = lat !== false && lon !== false;
  const hasMissingData = lat === null || lon === null;

    // Aviso en consola si hay un NULL inesperado ---
  if (hasMissingData) {
    console.warn(
      `[useForecastDayly]: Petición abortada por datos faltantes (null/undefined).`,
      { lat, lon }
    );
  }

  // Definición de la KEY para SWR ---
  const apiUrl = shouldFetch && !hasMissingData
  ? getPath(lat, lon, fetchParamsDaily + "&" + fetchParamsHourly)
  : null;

  // Fetch --
  // Cache
  const cacheOps = {
    // Durante este tiempo, SWR considera que el dato que tiene es lo suficientemente nuevo y no disparará el fetcher.
    dedupingInterval: (15 * 60 * 1000), // 15 minutos en milisegundos
  };

  // Fetch
  const { data, error, isLoading } = useSWR(apiUrl, fetcher, cacheOps);

  // Return --
  return {
    data: data ? transformer(data) : null,
    apiUrl,
    isLoading,
    isError: error,
  };
}

export default function transformer(data: { daily: any; hourly: any }): object | null {
  if (!data) return null;

  return {
    time: data.daily.time,
    weathercode: data.daily.weather_code,
    tempMax: data.daily.temperature_2m_max,
    tempMin: data.daily.temperature_2m_min,
    windDirection: data.daily.winddirection_10m_dominant,
    windSpeed: data.daily.windspeed_10m_max,
    precipitation_sum: data.daily.precipitation_sum,
    hourly: data.hourly
  };
}
