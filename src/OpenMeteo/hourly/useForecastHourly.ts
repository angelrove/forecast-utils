import useSWR from "swr";
import { fetcher, getPath } from "../conf.js";
import { getDatesFromNumDays } from "../helpers.js";
import type { ForecastData } from "../types";
import { fetchParams, fetchParamsOnlyCodes } from "./fetchParams.js";

/**
 * Custom hook to fetch hourly forecast data for a given location and number of days from OpenMeteo API.
 * Ejecución condicional: si 'lat, lon, dayNum' son 'false', no se realiza el fetch
 */
export function useForecastHourly(
  lat: number | false | null,
  lon: number | false | null,
  dayNum: number | false | null,
  // nowTime: Date,
  // isShort: boolean = false,
  onlyCodes: boolean = false
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
  ? getApiUrl(lat as number, lon as number, dayNum as number, onlyCodes)
  : null;

  // Fetch ---
  const { data, error, isLoading } = useSWR(apiUrl, fetcher);

  // Return ---
  return {
    // data: data ? transformer(data, dayNum, nowTime, isShort) : null,
    data: data,
    apiUrl,
    isLoading: isLoading,
    isError: error
  };
}

function getApiUrl(lat: number, lon: number, dayNum: number, onlyCodes: boolean) {
  const dates = getDatesFromNumDays(dayNum);

  const params = onlyCodes ? fetchParamsOnlyCodes : fetchParams;

  const basicApiUrl =
    "start_date=" +
    dates.startDate +
    "&" +
    "end_date=" +
    dates.endDate +
    "&" +
    params;

  return getPath(lat, lon, basicApiUrl);
}
