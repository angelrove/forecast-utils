/**
 * Custom hook to fetch current weather data from OpenMeteo API.
 *
 * @param {number} lat
 * @param {number} lon
 * @param {number} refreshIntervalMin
 * @returns {ForecastData} {data, isLoading, isError, apiUrl}
 * @memberof module:OpenMeteo
 */
export function useForecastCurrent(lat: number, lon: number, refreshIntervalMin?: number): ForecastData;
