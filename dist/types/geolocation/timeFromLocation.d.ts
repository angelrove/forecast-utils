/**
 * @memberof module:Geolocation
 * @typedef {Object} LocalTimeData
 * @property {Date} time - The local time.
 * @property {string} timeStr - The formatted local time string.
 * @property {string} timezone - The timezone name.
 * @property {string} timezoneId - The timezone ID.
 * @property {number} offset - The UTC offset in hours.
 * @property {string} offsetSign - The sign of the offset ('+' or '-').
 * @property {number} dstOffset - The DST offset in hours.
 */
/**
 * Get local time from a given location (lat, lng) using 'GoogleMaps TimeZone' API.
 *
 * @param {string} apiKey GoogleMaps API key.
 * @param {number} lat
 * @param {number} lng
 * @returns {Promise<any | LocalTimeData>} An object containing the local time and timezone information:
 * @throws {Error} If the API request fails or returns an error status.
 * @memberof module:Geolocation
 */
export function timeFromLocation(apiKey: string, lat: number, lng: number): Promise<any | LocalTimeData>;
export type LocalTimeData = {
    /**
     * - The local time.
     */
    time: Date;
    /**
     * - The formatted local time string.
     */
    timeStr: string;
    /**
     * - The timezone name.
     */
    timezone: string;
    /**
     * - The timezone ID.
     */
    timezoneId: string;
    /**
     * - The UTC offset in hours.
     */
    offset: number;
    /**
     * - The sign of the offset ('+' or '-').
     */
    offsetSign: string;
    /**
     * - The DST offset in hours.
     */
    dstOffset: number;
};
