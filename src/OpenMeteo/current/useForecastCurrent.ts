import useSWR from "swr";
import { fetcher, getPath } from "../conf.js";
import type { ForecastData } from "../types";
import { fetchParams } from "./fetchParams.js";
import transformer from "./transformer.js";

/**
 * Custom hook to fetch current weather data from OpenMeteo API.
 */
export function useForecastCurrent(
  lat: number | false | null,
  lon: number | false | null,
  refreshIntervalMin: number = 0): ForecastData
  {

  // Lógica de validación ---
  const shouldFetch = lat !== false && lon !== false;
  const hasMissingData = lat === null || lon === null;

    // Aviso en consola si hay un NULL inesperado ---
  if (hasMissingData) {
    console.warn(
      `[useForecastCurrent]: Petición abortada por datos faltantes (null/undefined).`,
      { lat, lon }
    );
  }

  // Definición de la KEY para SWR ---
  const apiUrl = shouldFetch && !hasMissingData
  ? getPath(lat, lon, fetchParams)
  : null;

  // Fetch ---
  const { data, error, isLoading } = useSWR(apiUrl, fetcher, {
    refreshInterval: refreshIntervalMin * 60 * 1000,
  });

  return {
    data: data ? transformer(data) : null,
    apiUrl: apiUrl,
    isLoading,
    isError: error,
  };
}
