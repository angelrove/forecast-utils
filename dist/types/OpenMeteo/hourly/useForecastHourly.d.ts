/**
 * Custom hook to fetch hourly forecast data for a given location and number of days from OpenMeteo API.
 *
 * @param {{ latitude: number, longitude: number }} location
 * @param {number} dayNum Number of days from today: -1 = 24 hours, 0 = today, 1 = tomorrow, ...
 * @returns {ForecastData} -
 * @memberof module:OpenMeteo
 */
export function useForecastHourly(location: {
    latitude: number;
    longitude: number;
}, dayNum: number): ForecastData;
