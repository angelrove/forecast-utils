/**
 * Transforms the OpenMeteo API data into a more usable format.
 *
 * @param {{current: any, daily: any, hourly: any, latitude: number, longitude: number}} data - The data object to transform.
 * @returns {Object|null} - The transformed data object or null if the input is invalid.
 */
export default function transformer(data: {
    current: any;
    daily: any;
    hourly: any;
    latitude: number;
    longitude: number;
}): Object | null;
