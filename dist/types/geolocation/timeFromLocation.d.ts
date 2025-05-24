/**
 * Get local time from a given location (lat, lng) using 'GoogleMaps TimeZone' API.
 *
 * @param {string} apiKey - GoogleMaps API key.
 * @param {number} lat
 * @param {number} lng
 * @returns {Promise<any | LocalTimeData>} - An object containing the local time and timezone information:
 * @throws {Error} - If the API request fails or returns an error status.
 * @memberof module:Astronomy/helpers
 */
export function timeFromLocation(apiKey: string, lat: number, lng: number): Promise<any | LocalTimeData>;
