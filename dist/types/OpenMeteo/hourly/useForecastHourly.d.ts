/**
 * Custom hook to fetch hourly forecast data for a given location and number of days from OpenMeteo API.
 *
 * @param {{ latitude: number, longitude: number }} location
 * @param {number} dayNum - Number of days from today: -1 = 24 hours, 0 = today, 1 = tomorrow, ...
 * @returns {{ data: any, isLoading: boolean, isError: any }}
 */
export function useForecastHourly(location: {
    latitude: number;
    longitude: number;
}, dayNum: number): {
    data: any;
    isLoading: boolean;
    isError: any;
};
