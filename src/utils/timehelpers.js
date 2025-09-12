/**
 * Helpers for get date and time formeted strings
 *
 * @module Utils/TimeDateStr
 */

/**
 * TimeDateStr.
 */
export const TimeDateStr = {
  dateFormat,
  nowString,
  timeString,
  getLocalTimeFromTz,
};

//------------------------------------------------------
/**
 * Returns a date as a formated string.
 *
 * @param {Date} [date=new Date()] La fecha a formatear.
 * @returns {string} La fecha formateada.
 */
function dateFormat(date = new Date()) {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "short",
  };
  /* @ts-expect-error */
  return date.toLocaleDateString([], options);
}
//------------------------------------------------------
/**
 * Returns a time as a formated string.
 *
 * @param {Date} [date]
 * @param {boolean} [sec=false]
 * @returns {string} La fecha formateada.
 */
function timeString(date = new Date(), sec = false) {
  if (sec) {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      second: "2-digit",
    });
  }

  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
//------------------------------------------------------
/**
 * Returns a now time as a formated string.
 *
 * @param {boolean} sec
 * @returns {String} now time as a formated string
 */
function nowString(sec = false) {
  return timeString(new Date(), sec);
}
//------------------------------------------------------
/**
 * Return the local time string from a given timezone.
 *
 * @param {string} timeZone - The timezone string (e.g., 'America/New_York').
 * @param {Date | number} [date=new Date()] - The date object to format. Defaults to the current date.
 * @returns {string} - The formatted local time string.
 */
function getLocalTimeFromTz(timeZone, date = new Date()) {
  // Timezone example
  // timeZone = 'America/New_York';

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: timeZone,
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
  return formatter.format(date);
}
//------------------------------------------------------
