/**
 * Custom hook to fetch daily forecast (10 days) data from OpenMeteo API.
 * https://api.open-meteo.com/v1/forecast?timezone=auto&latitude=36.6644363&longitude=-4.5108962&forecast_days=10&daily=weathercode
 *
 * @param {number} lat
 * @param {number} lon
 * @param {number} refreshIntervalMin
 * @returns {ForecastData} -
 * @memberof module:OpenMeteo
 */
export function useForecastDaily(lat: number, lon: number, refreshIntervalMin?: number): ForecastData;
