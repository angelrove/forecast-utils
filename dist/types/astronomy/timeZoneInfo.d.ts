/**
 * Google API: Get local time from any location
 *
 * @param {string} apiKey - GoogleMaps API key.
 * @param {number} lat
 * @param {number} lng
 * @returns {Promise<any | LocalTimeData>} - An object containing the local time and timezone information:
 * @throws {Error} - If the API request fails or returns an error status.
 */
export function getLocalTimeInfo(apiKey: string, lat: number, lng: number): Promise<any | LocalTimeData>;
