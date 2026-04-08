import useSWR from "swr";
import { fetcher, getPath } from "../conf.js";
import { getDatesFromNumDays } from "../helpers.js";
import type { ForecastData } from "../types";
import { fetchParams } from "./fetchParams.js";

/**
 * Custom hook to fetch hourly forecast data for a given location and number of days from OpenMeteo API.
 */
export function useForecastHourly(
  lat: number | false,
  lon: number | false,
  dayNum: number | false
): ForecastData | null
  {

  // Validate --
  const shouldFetch = lat !== false && lon !== false && dayNum !== false;

  if (lat == null || lon == null) {
    throw new Error("useForecastHourly: invalid coordinatesxxxxxx");
  }

  // Fetch ---
  const apiUrl = shouldFetch
    ? getApiUrl(lat, lon, dayNum) : null;

  const { data, error, isLoading } = useSWR(apiUrl, fetcher);

  if (!shouldFetch) {
    return null;
  }

  return {
    data: data,
    apiUrl: apiUrl,
    isLoading,
    isError: error,
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