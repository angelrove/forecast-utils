import geolocationCapacitor from "./lib/geolocation";
import reverseGeocoding from "./lib/reversegeocoding";
import type { GeocodingAddress, ResolvedLocation } from "./types";

/**
 * Get the current geolocation of the device and reverse geocode it to get the address.
 *
 * @returns {Promise<ResolvedLocation>} Resolved location object.
 * @throws {Error} If geolocation is not supported or permission is denied.
 */
export async function getGeolocation(): Promise<ResolvedLocation> {
  let location: { latitude: number; longitude: number };
  let address = {} as GeocodingAddress;

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
    ...address,
    latitude: location.latitude,
    longitude: location.longitude
  };
}
//--------------------------------------------
