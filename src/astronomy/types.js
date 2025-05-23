/**
 * @module astronomy/types
 */

/**
 * @typedef {Object} AstroPosition
 * @property {number} altitude
 * @property {number} azimuth
 * @property {string} direction
 * @property {string} direction_full
 */

/**
 * @typedef {Object} MoonData
 * @property {AstroPosition} position
 * @property {Object} next
 * @property {string} next.newMoon - Date of the next new moon.
 * @property {string} next.fullMoon - Date of the next full moon.
 */

/**
 * @typedef {Object} LocalTimeData
 * @property {Date} time - The local time.
 * @property {string} timeStr - The formatted local time string.
 * @property {string} timezone - The timezone name.
 * @property {string} timezoneId - The timezone ID.
 * @property {number} offset - The UTC offset in hours.
 * @property {string} offsetSign - The sign of the offset ('+' or '-').
 * @property {number} dstOffset - The DST offset in hours.
 */
