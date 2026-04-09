import useSWR from "swr";
import { fetcher, getPath } from "../conf.js";
import { getDatesFromNumDays } from "../helpers.js";
import type { ForecastData } from "../types";
import { fetchParams } from "./fetchParams.js";

/**
 * Custom hook to fetch hourly forecast data for a given location and number of days from OpenMeteo API.
 * Ejecución condicional: si todos los parámetros son false, no se realiza el fetch
 */
export function useForecastHourly(
  lat: number | false | null,
  lon: number | false | null,
  dayNum: number | false | null
): ForecastData | null
  {

  // Lógica de validación ---
  const shouldFetch = lat !== false && lon !== false && dayNum !== false;
  const hasMissingData = lat === null || lon === null || dayNum === null;

  // Aviso en consola si hay un NULL inesperado ---
  if (hasMissingData) {
    console.warn(
      `[useForecastHourly]: Petición abortada por datos faltantes (null/undefined).`,
      { lat, lon, dayNum }
    );
  }

  // Definición de la KEY para SWR ---
  const apiUrl = shouldFetch && !hasMissingData
  ? getApiUrl(lat as number, lon as number, dayNum as number)
  : null;

  // Fetch ---
  const { data, error, isLoading } = useSWR(apiUrl, fetcher);

  // Return ---
  return {
    data: data ?? null,
    apiUrl,
    isLoading: !apiUrl ? false : isLoading,
    isError: error
  };
}

function getApiUrl(lat: number, lon: number, dayNum: number) {
  const dates = getDatesFromNumDays(dayNum);
  const basicApiUrl =
    "start_date=" +
    dates.startDate +
    "&" +
    "end_date=" +
    dates.endDate +
    "&" +
    fetchParams;

  return getPath(lat, lon, basicApiUrl);
}