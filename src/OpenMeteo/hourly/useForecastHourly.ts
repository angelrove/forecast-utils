import useSWR from "swr";
import { fetcher, getPath } from "../conf.js";
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
  onlyWeatherCode: boolean = false
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
  ? getApiUrl(lat as number, lon as number, dayNum as number, onlyWeatherCode)
  : null;

  // Fetch ---
  const { data, error, isLoading } = useSWR(apiUrl, fetcher);

  // Return ---
  return {
    data: data ? data.hourly : null,
    apiUrl,
    isLoading: isLoading,
    isError: error
  };
}

function getApiUrl(lat: number, lon: number, dayNum: number, onlyCodes: boolean) {
  const strDate = getDateFromNumDays(dayNum);

  const params = onlyCodes === true ? fetchParamsOnlyCodes : fetchParams;

  const basicApiUrl =
    "start_date=" +
    strDate +
    "&" +
    "end_date=" +
    strDate +
    "&" +
    params;

  return getPath(lat, lon, basicApiUrl);
}

/**
 * Get the date of a certain day based on the number of days from today.
 *
 * @param {number} numDay
 * @returns {string} - The date in YYYY-MM-DD format.
 */
export function getDateFromNumDays(dayNum: number) {
  const date = new Date();
  date.setDate(date.getDate() + dayNum);

  return date.toISOString().split("T")[0];
}
