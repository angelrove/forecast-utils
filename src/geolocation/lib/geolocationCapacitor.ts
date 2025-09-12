import { Geolocation } from "@capacitor/geolocation";

/**
 * Get the current GPS location of the device with Capacitor.
 *
 * @returns {Promise<{latitude: number, longitude: number}>}
 * @throws {Error} If geolocation is not supported or permission is denied.
 */
export default async function geolocationCapacitor() {
  try {
    const coordinates = await Geolocation.getCurrentPosition();
    // console.log('geolocation - coordinates: ', coordinates);

    return {
      latitude: coordinates.coords.latitude,
      longitude: coordinates.coords.longitude,
    };
  } catch (_error) {
    throw new Error("Error al obtener la ubicación");
  }
}
