/**
 * @param {string} url
 */
export function fetcher(url: string): Promise<any>;
/**
 * Get path for OpenMeteo API
 *
 * @param {number} lat
 * @param {number} lon
 * @param {string} path
 * @returns {string}
 */
export function getPath(lat: number, lon: number, path: string): string;
