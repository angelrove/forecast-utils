/**
 * Custom hook to fetch hourly forecast data for a given location and number of days from OpenMeteo API.
 */

import useSWR from "swr";
import { fetcher, getPath } from "../conf.js";
import { getDatesFromNumDays } from "../helpers.js";
import { fetchParams } from "./fetchParams.js";

/**
 * Custom hook to fetch hourly forecast data for a given location and number of days from OpenMeteo API.
 *
 * @param {{ latitude: number, longitude: number }} location
 * @param {number} dayNum - Number of days from today: -1 = 24 hours, 0 = today, 1 = tomorrow, ...
 * @returns {{ data: any, isLoading: boolean, isError: any }}
 * @memberof module:OpenMeteo
 */
export function useForecastHourly(location, dayNum) {
  if (!location.latitude || !location.longitude) {
    throw new Error("useForecastHourly: invalid coordinates");
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
  apiUrl = getPath(location.latitude, location.longitude, apiUrl);

  const { data, error, isLoading } = useSWR(apiUrl, fetcher);

  return {
    data: data,
    isLoading,
    isError: error,
  };
}
