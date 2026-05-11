import { logger } from "../utils/logger";
import { TimeDateStr } from "../utils/timehelpers";
import type { TimezoneInfo } from "./types";

/**
 * Google Time Zone API
 * Respuestas de zona horaria: https://developers.google.com/maps/documentation/timezone/requests-timezone?hl=es-419#responses
 * {
 *  "dstOffset": 3600,
 *  "rawOffset": -28800,
 *  "status": "OK",
 *  "timeZoneId": "America/Los_Angeles",
 *  "timeZoneName": "hora de verano del Pacífico"
 * }
 */
type GoogleTimezoneResponse = {
  dstOffset: number; // desfase del horario de verano en segundos.
  rawOffset: number; // diferencia con respecto a la hora UTC (en segundos) para la ubicación determinada.
  status: string;
  timeZoneId: string;
  timeZoneName: string;
  errorMessage?: string;
};

//------------------------------------------------------
/**
 * Get local time from a given location (lat, lng) using 'GoogleMaps TimeZone' API.
 *
 * @param {string} apiKey GoogleMaps API key.
 * @param {number} lat
 * @param {number} lng
 * @returns {Promise<TimezoneInfo>} An object containing the local time and timezone information:
 * @throws {Error} If the API request fails or returns an error status.
 */
export async function timeFromLocation(
  apiKey: string,
  lat: number,
  lng: number,
): Promise<TimezoneInfo> {
  const timestamp = Math.floor(Date.now() / 1000);
  const url =
    "https://maps.googleapis.com/maps/api/timezone/json?" +
    `location=${lat},${lng}&timestamp=${timestamp}&key=${apiKey}`;

  // Fetch timezone information ---
  logger.fetch(
    "GoogleMaps: timezone",
    "https://maps.googleapis.com/maps/api/timezone/...",
  );
  return fetch(url)
    .then((response) => response.json())
    .then((timezoneInfo: GoogleTimezoneResponse) => {
      // Error ---
      if (timezoneInfo.status !== "OK") {
        console.error(timezoneInfo);
        return getLocalTimeDataErr();
      }

      // Success ---
      return getLocalTimeData(timezoneInfo);
    })
    .catch((error) => {
      console.error(error);
      return getLocalTimeDataErr();
    });
}
//------------------------------------------------------
// Private
//------------------------------------------------------
/**
 * @private
 * @param {GoogleTimezoneResponse} googleTimezoneResponse
 * @returns {TimezoneInfo} - An object containing the local time and timezone information.
 */
function getLocalTimeData(
  googleTimezoneResponse: GoogleTimezoneResponse,
): TimezoneInfo {
  // Time
  const date = new Date();
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  const localTime =
    utc +
    1000 * googleTimezoneResponse.rawOffset +
    1000 * googleTimezoneResponse.dstOffset;
  const time = new Date(localTime);

  return {
    time: time,
    timeStr: TimeDateStr.timeString(time),
    timezone: googleTimezoneResponse.timeZoneName,
    timezoneId: googleTimezoneResponse.timeZoneId,
    offset: (googleTimezoneResponse.rawOffset / 3600).toString(),
    offsetSign: googleTimezoneResponse.rawOffset < 0 ? "" : "+",
    dstOffset: (googleTimezoneResponse.dstOffset / 3600).toString(),
  };
}
//------------------------------------------------------
/**
 * @private
 * @returns {TimezoneInfo} - An object containing the local time and timezone information when error.
 */
function getLocalTimeDataErr(): TimezoneInfo {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return {
    time: new Date(),
    timeStr: TimeDateStr.timeString(new Date()),
    timezone: timezone,
    timezoneId: timezone,
    offset: "0",
    offsetSign: "+",
    dstOffset: "0",
  };
}
//------------------------------------------------------
