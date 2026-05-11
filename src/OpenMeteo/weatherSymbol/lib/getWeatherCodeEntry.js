// @ts-nocheck
import { weatherCodes as weatherCodesEs } from "./WeatherCodesEs.js";
import { weatherCodes as weatherCodesEn } from "./WeatherCodesEn.js";

/**
 * Returns weather code info o undefined if not found.
 *
 * @param {number} code - WMO Weather interpretation code.
 * @param {string} lang - Language code ('es' or 'en').
 * @returns {WeatherCodeEntry | undefined}
 */
export function getWeatherCodeEntry(code, lang = "es") {
  const weatherCodes = lang === "en" ? weatherCodesEn : weatherCodesEs;
  return weatherCodes.find((entry) => entry.code === code);
}
