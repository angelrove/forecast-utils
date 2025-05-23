/**
 * Get the current GPS location of the device with Capacitor.
 *
 * @returns {Promise<{latitude: number, longitude: number}>}
 * @throws {Error} If geolocation is not supported or permission is denied.
 */
export default function geolocationCapacitor(): Promise<{
    latitude: number;
    longitude: number;
}>;
