/**
 * Custom hook to fetch current weather data from OpenMeteo API.
 *
 * @param {number} lat
 * @param {number} lon
 * @param {number} refreshIntervalMin
 * @returns {{ data: any, apiUrl: string, isLoading: boolean, isError: any }}
 */
export function useForecastCurrent(lat: number, lon: number, refreshIntervalMin?: number): {
    data: any;
    apiUrl: string;
    isLoading: boolean;
    isError: any;
};
