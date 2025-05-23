// @ts-nocheck
/**
 * @module astronomy/time-date
 */

import { timeString } from "./timehelpers.js";

//------------------------------------------------------
/**
 * Google API: Get local time from any location
 *
 * @param {string} apiKey - GoogleMaps API key.
 * @param {number} lat
 * @param {number} lng
 * @returns {Promise<any | LocalTimeData>} - An object containing the local time and timezone information:
 * @throws {Error} - If the API request fails or returns an error status.
 */
export async function getLocalTimeInfo(apiKey, lat, lng) {
  const timestamp = Math.floor(Date.now() / 1000);
  const url =
    "https://maps.googleapis.com/maps/api/timezone/json?" +
    `location=${lat},${lng}&timestamp=${timestamp}&key=${apiKey}`;

  // Log: hidden apiKey
  console.info(">> Google (time)", url.replace(/key=[^&]+/, "key=********"));

  // Fetch timezone information ---
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Error ---
      if (data.status !== "OK") {
        console.error(data);
        return getLocalTimeDataErr();
      }

      // Success ---
      return getLocalTimeData(data);
    })
    .catch((error) => {
      console.error(error);
    });
}
//------------------------------------------------------
/**
 * @private
 * @param {Object} timezoneInfo - The timezone Google API information.
 * @param {number} timezoneInfo.rawOffset - The raw offset in seconds.
 * @param {number} timezoneInfo.dstOffset - The DST offset in seconds.
 * @param {string} timezoneInfo.timeZoneName - The name of the timezone.
 * @param {string} timezoneInfo.timeZoneId - The ID of the timezone.
 * @returns {LocalTimeData} - An object containing the local time and timezone information.
 */
function getLocalTimeData(timezoneInfo) {
  // Time
  const date = new Date();
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  const localTime =
    utc + 1000 * timezoneInfo.rawOffset + 1000 * timezoneInfo.dstOffset;
  const time = new Date(localTime);

  return {
    time: time,
    timeStr: timeString(time),
    timezone: timezoneInfo.timeZoneName,
    timezoneId: timezoneInfo.timeZoneId,
    offset: timezoneInfo.rawOffset / 3600,
    offsetSign: timezoneInfo.rawOffset < 0 ? "" : "+",
    dstOffset: timezoneInfo.dstOffset / 3600,
  };
}
//------------------------------------------------------
/**
 * @private
 * @returns {LocalTimeData} - An object containing the local time and timezone information when error.
 */
function getLocalTimeDataErr() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return {
    time: new Date(),
    timeStr: timeString(new Date()),
    timezone: timezone,
    timezoneId: timezone,
    offset: 0,
    offsetSign: "+",
    dstOffset: 0,
  };
}
//------------------------------------------------------
