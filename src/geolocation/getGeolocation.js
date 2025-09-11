import geolocationCapacitor from "./lib/geolocation.js";
import reverseGeocoding from "./lib/reversegeocoding.js";

/**
 * @memberof module:Geolocation
 * @typedef {object} ResolvedLocation
 * @property {number} latitude
 * @property {number} longitude
 * // Address
 * @property {string} sublocality
 * @property {string} locality
 * @property {string} country
 * @property {string} country_short
 * @property {string} formatted_address
 */

/**
 * Get the current geolocation of the device and reverse geocode it to get the address.
 *
 * @memberof module:Geolocation
 * @returns {Promise<ResolvedLocation>} Promise
 * @throws {Error} If geolocation is not supported or permission is denied.
 */
export async function getGeolocation() {
  let location;
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
      /* @ts-expect-error */
      import.meta.env.VITE_googlemaps_api_key,
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : error;
    console.log("reverseGeocoding - error: ", message);
    address = {
      sublocality: "",
      locality: "",
      country: "",
      country_short: "",
      formatted_address:
        "[" + location.latitude + ", " + location.longitude + "]",
    };
  }

  // Return data ---
  return {
    latitude: location.latitude,
    longitude: location.longitude,
    sublocality: address.sublocality,
    locality: address.locality,
    country: address.country,
    country_short: address.country_short,
    formatted_address: address.formatted_address,
  };
}
//--------------------------------------------
