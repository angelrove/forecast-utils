import useSWR from "swr";
import { fetcher, getPath } from "../conf.js";
import type { ForecastData } from "../types";
import { fetchParams } from "./fetchParams.js";
import transformer from "./transformer.js";

/**
 * Custom hook to fetch daily forecast (10 days) data from OpenMeteo API.
 * https://api.open-meteo.com/v1/forecast?timezone=auto&latitude=36.6644363&longitude=-4.5108962&forecast_days=10&daily=weathercode
 */
export function useForecastDaily(
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
  ? getPath(lat, lon, fetchParams)
  : null;

  // Fetch --
  const { data, error, isLoading } = useSWR(apiUrl, fetcher, {
    // Durante este tiempo, SWR considera que el dato que tiene es lo suficientemente nuevo y no disparará el fetcher.
    dedupingInterval: (15 * 60 * 1000), // 10 minutos en milisegundos

    // Actualiza solo si la app está abierta frente al usuario
    // refreshInterval: refreshIntervalMin * 60 * 1000,
  });

  // Return --
  return {
    data: data ? transformer(data) : null,
    apiUrl: apiUrl,
    isLoading,
    isError: error,
  };
}
