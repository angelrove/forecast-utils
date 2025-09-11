import useSWR from "swr";
import { fetcher, getPath } from "../conf.js";
import { getDatesFromNumDays } from "../helpers.js";
import type { ForecastData } from "../types";
import { fetchParams } from "./fetchParams.js";

/**
 * Custom hook to fetch hourly forecast data for a given location and number of days from OpenMeteo API.
 */
export function useForecastHourly(
  lat: number,
  lon: number,
  dayNum: number): ForecastData
  {

  // Validate --
  if (lat == null || lon == null) {
    throw new Error("useForecastHourly: invalid coordinates: ["+lon+"]["+lat+"]");
  }

  // Fetch ---
  const dates = getDatesFromNumDays(dayNum);

  let apiUrl =
    "start_date=" +
    dates.startDate +
    "&" +
    "end_date=" +
    dates.endDate +
    "&" +
    fetchParams;
  apiUrl = getPath(lat, lon, apiUrl);

  const { data, error, isLoading } = useSWR(apiUrl, fetcher);

  return {
    data: data,
    apiUrl: apiUrl,
    isLoading,
    isError: error,
  };
}
