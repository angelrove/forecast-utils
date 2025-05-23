/**
 * Get the current geolocation of the device and reverse geocode it to get the address.
 *
 * @returns {Promise<{latitude: number, longitude: number, formatted_address: string}>} Promise
 * @throws {Error} If geolocation is not supported or permission is denied.
 * @memberof module:Geolocation
 */
export function getGeolocation(): Promise<{
    latitude: number;
    longitude: number;
    formatted_address: string;
}>;
