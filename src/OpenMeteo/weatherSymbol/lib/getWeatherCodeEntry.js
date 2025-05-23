// @ts-nocheck
import { weatherCodes } from "./WeatherCodesEs.js";

/**
 * Returns weather code info o undefined if not found.
 *
 * @param {number} code - WMO Weather interpretation code.
 * @returns {WeatherCodeEntry | undefined}
 */
export function getWeatherCodeEntry(code) {
  return weatherCodes.find((entry) => entry.code === code);
}
