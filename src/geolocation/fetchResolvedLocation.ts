import geolocation from "./lib/geolocation";
import reverseGeocoding from "./lib/reversegeocoding";
import type { GeocodingAddress, ResolvedLocation } from "./types";

/**
 * Fetches the current device position and performs reverse geocoding to resolve the address.
 *
 * @returns {Promise<{ changed: boolean; location: ResolvedLocation }>} Object containing a change flag and the resolved location.
 * @throws {Error} If geolocation is not supported or permission is denied.
 */
export async function fetchResolvedLocation(
  googlemaps_api_key: string,
  currentLocation?: ResolvedLocation,
): Promise<{ changed: boolean; location: ResolvedLocation }> {
  let location: { latitude: number; longitude: number };
  let address: GeocodingAddress;

  // Location --------------
  try {
    location = await geolocation();
  } catch (error) {
    const message = error instanceof Error ? error.message : error;
    throw new Error("Geolocation error: " + message);
  }

  // Is the same location (se mantiene la actual)
  if (
    currentLocation &&
    currentLocation.latitude === location.latitude &&
    currentLocation.longitude === location.longitude
  ) {
    return {
      changed: false,
      location: currentLocation,
    };
  }

  // Reverse geocoding -----
  try {
    address = await reverseGeocoding(
      location.latitude,
      location.longitude,
      googlemaps_api_key,
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : error;
    console.warn("reverseGeocoding - error: ", message);
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
    changed: true,
    location: {
      ...address,
      latitude: location.latitude,
      longitude: location.longitude,
    },
  };
}
//--------------------------------------------
