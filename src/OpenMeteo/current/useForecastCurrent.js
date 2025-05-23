/**
 * @module OpenMeteo:current
 */

import useSWR from "swr";
import { fetcher, getPath } from "../conf.js";
import { fetchParams } from "./fetchParams.js";
import transformer from "./transformer.js";

/**
 * Custom hook to fetch current weather data from OpenMeteo API.
 *
 * @param {number} lat
 * @param {number} lon
 * @param {number} refreshIntervalMin
 * @returns {{ data: any, apiUrl: string, isLoading: boolean, isError: any }}
 */
export function useForecastCurrent(lat, lon, refreshIntervalMin = 0) {
  if (!lat || !lon) {
    throw new Error("useForecastCurrent: invalid coordinates");
  }

  const apiUrl = getPath(lat, lon, fetchParams);
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
