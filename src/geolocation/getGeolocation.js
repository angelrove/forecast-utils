import geolocationCapacitor from "./lib/geolocation.js";
import reverseGeocoding from "./lib/reversegeocoding.js";

/**
 * Get the current geolocation of the device and reverse geocode it to get the address.
 *
 * @returns {Promise<{latitude: number, longitude: number, formatted_address: string}>} Promise
 * @throws {Error} If geolocation is not supported or permission is denied.
 * @memberof module:Geolocation
 */
export async function getGeolocation() {
  let location = null;
  let address = null;

  // Location ---
  try {
    location = await geolocationCapacitor();
    // location.latitude = '25.90197748117876'; location.longitude = '-65.71650426928204';
  } catch (error) {
    const message = error instanceof Error ? error.message : error;
    throw new Error("Geolocation error: " + message);
  }

  // Address ---
  try {
    address = await reverseGeocoding(
      location.latitude,
      location.longitude,
      // @ts-ignore
      import.meta.env.VITE_googlemaps_api_key,
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : error;
    console.log("reverseGeocoding - error: ", message);
    address = {
      formatted_address:
        "[" + location.latitude + ", " + location.longitude + "]",
    };
  }

  // Return data ---
  return {
    ...location,
    ...address,
  };
}
//--------------------------------------------
