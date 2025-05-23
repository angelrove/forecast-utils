/**
 * @author: Jose Angel Romero Vegas
 * @license: MIT
 * @description:
 * Several utility libraries for the Tierracolora project:
 * - Forecast API (OpenWeather)
 * - Astronomy utilities
 *
 * I use public libraries for the following:
 * - Astronomy calculations: suncalc3
 */

// Astronomy
export { default as MoonCalc } from "./astronomy/moon/MoonCalc.js";
export { default as SunCalc } from "./astronomy/sun/SunCalc.js";
export {
  dateFormat,
  getLocalTimeFromTz,
  nowString,
  timeString,
} from "./astronomy/timehelpers.js";
export { getLocalTimeInfo as getLocalTime } from "./astronomy/timeZoneInfo.js";

// Geolocation
export { getGeolocation } from "./geolocation/getGeolocation.js";

// OpenMeteo
export { useForecastCurrent } from "./OpenMeteo/current/useForecastCurrent.js";
export { useForecastDaily } from "./OpenMeteo/daily/useForecastDaily.js";
export { useForecastHourly } from "./OpenMeteo/hourly/useForecastHourly.js";
export { weatherSymbol } from "./OpenMeteo/weatherSymbol/weatherSymbol.js";

// utils
export { degreesToCompass } from "./utils/degreesToCompass.js";
export { getWarning, getWarningByDays } from "./utils/warning.js";
export { WindArrow } from "./utils/wind/WindArrow.jsx";
export { windArrowTx } from "./utils/wind/windArrowTx.js";
export { getWindLevel } from "./utils/wind/windLevel.js";
