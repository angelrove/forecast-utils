/**
 * Reverse Geocoding with GoogleMaps API
 *
 * @see https://developers.google.com/maps/documentation/geocoding/requests-reverse-geocoding?hl=es-419
 * @see https://maps.googleapis.com/maps/api/geocode/json?latlng=36.7248,-4.541&key=[api_key]&result_type=sublocality
 *
 * @param {number} latitude - Latitude of the location.
 * @param {number} longitude - Longitude of the location.
 * @param {string} api_key - Google Maps API key.
 * @returns {Promise<{ sublocality: string; locality: string; country: string; country_short: string; formatted_address: string; }>} - The address components.
 * @throws {Error} - If the API key is invalid or the request fails.
 */
export default function reverseGeocoding(latitude: number, longitude: number, api_key: string): Promise<{
    sublocality: string;
    locality: string;
    country: string;
    country_short: string;
    formatted_address: string;
}>;
