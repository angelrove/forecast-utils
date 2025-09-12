// @ts-nocheck
import TimeDateStr from "../utils/timehelpers.js";

/**
 * @typedef {object} LocalTimeData
 * @property {Date} time - The local time.
 * @property {string} timeStr - The formatted local time string.
 * @property {string} timezone - The timezone name.
 * @property {string} timezoneId - The timezone ID.
 * @property {number} offset - The UTC offset in hours.
 * @property {string} offsetSign - The sign of the offset ('+' or '-').
 * @property {number} dstOffset - The DST offset in hours.
 */

//------------------------------------------------------
/**
 * Get local time from a given location (lat, lng) using 'GoogleMaps TimeZone' API.
 *
 * @param {string} apiKey GoogleMaps API key.
 * @param {number} lat
 * @param {number} lng
 * @returns {Promise<any | LocalTimeData>} An object containing the local time and timezone information:
 * @throws {Error} If the API request fails or returns an error status.
 */
export async function timeFromLocation(apiKey, lat, lng) {
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
// Private
//------------------------------------------------------
/**
 * @private
 * @param {object} timezoneInfo - The timezone Google API information.
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
    timeStr: TimeDateStr.timeString(time),
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
    timeStr: TimeDateStr.timeString(new Date()),
    timezone: timezone,
    timezoneId: timezone,
    offset: 0,
    offsetSign: "+",
    dstOffset: 0,
  };
}
//------------------------------------------------------
