/**
 * Get the current geolocation of the device with the browser.
 *
 * @returns {Promise<{latitude: number, longitude: number}>}
 * @throws {Error} If geolocation is not supported or permission is denied.
 */
export default function geolocation(): Promise<{
    latitude: number;
    longitude: number;
}>;
