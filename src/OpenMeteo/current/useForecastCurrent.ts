import useSWR from "swr";
import { fetcher, getPath } from "../conf.js";
import type { ForecastData } from "../types";
import { fetchParams } from "./fetchParams.js";
import transformer from "./transformer.js";

/**
 * Custom hook to fetch current weather data from OpenMeteo API.
 */
export function useForecastCurrent(
  lat: number | undefined,
  lon: number | undefined,
  refreshIntervalMin: number = 0): ForecastData
  {
  // Validate --
  if (lat == null || lon == null) {
    throw new Error("useForecastCurrent: invalid coordinates");
  }

  // Fetch ---
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
