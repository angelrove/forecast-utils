// @ts-nocheck
import useSWR from "swr";
import { fetcher, getPath } from "../conf.js";
import { fetchParams } from "./fetchParams.js";
import transformer from "./transformer.js";

/**
 * Custom hook to fetch daily forecast (10 days) data from OpenMeteo API.
 * https://api.open-meteo.com/v1/forecast?timezone=auto&latitude=36.6644363&longitude=-4.5108962&forecast_days=10&daily=weathercode
 *
 * @param {number} lat
 * @param {number} lon
 * @param {number} refreshIntervalMin
 * @returns {ForecastData} {data, isLoading, isError, apiUrl}
 * @memberof module:OpenMeteo
 */
export function useForecastDaily(lat, lon, refreshIntervalMin = 0) {
  // Validate --
  if (!lat || !lon) {
    throw new Error("useForecastDaily: invalid coordinates");
  }

  // Fetch --
  const apiUrl = getPath(lat, lon, fetchParams);
  // console.log(apiUrl);
  const { data, error, isLoading } = useSWR(apiUrl, fetcher, {
    refreshInterval: refreshIntervalMin * 60 * 1000,
  });

  // Return --
  return {
    data: data ? transformer(data) : null,
    apiUrl: apiUrl,
    isLoading,
    isError: error,
  };
}
