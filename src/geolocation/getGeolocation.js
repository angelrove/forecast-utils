/**
 * @module Geolocation
 */

import geolocationCapacitor from "./lib/geolocation.js";
import reverseGeocoding from "./lib/reversegeocoding.js";

/**
 * Get the current geolocation of the device and reverse
 * geocode it to get the address.
 *
 * @returns {Promise<{latitude: number, longitude: number, formatted_address: string}>}
 * @throws {Error} If geolocation is not supported or permission is denied.
 */
export async function getGeolocation() {
  let location = null;
  let address = null;

  // Location ---
  try {
    location = await geolocationCapacitor();
    // location.latitude = '25.90197748117876'; location.longitude = '-65.71650426928204';
  } catch (error) {
    throw new Error("Geolocation error: " + error.message);
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
    console.log("reverseGeocoding - error: ", error.message);
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
