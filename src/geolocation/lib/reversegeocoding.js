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
export default async function reverseGeocoding(latitude, longitude, api_key) {
  // Validate --
  if (!api_key) {
    console.error("ReverseGeocoding: invalid api key");
    throw new Error("ReverseGeocoding: invalid api key");
  }
  if (!latitude || !longitude) {
    console.error("ReverseGeocoding: invalid coordinates");
    throw new Error("ReverseGeocoding: invalid coordinates");
  }

  // API URL --
  const host =
    "https://maps.googleapis.com/maps/api/geocode/json?key=" +
    api_key +
    "&latlng=" +
    latitude +
    "," +
    longitude;

  /*
   * 'result_type' param:
   *    street_address,
   *    colloquial_area,
   *    locality,
   *    sublocality,
   *    administrative_area_level_1,
   *    administrative_area_level_2
   */
  const urlApi = host + "&result_type=sublocality";

  // Fetch data --
  const response = await fetch(urlApi);
  devLog("Geocoding", urlApi);

  // Check response --
  if (!response.ok) {
    const message =
      "Failed to Reverse Geocoding: " +
      response.status +
      " " +
      response.statusText;
    console.error(message);
    throw new Error(message);
  }
  const data = await response.json();

  // No results --
  if (data.status === "ZERO_RESULTS") {
    // plus_code: { compound_code: 'G4F9+72P Marbella, Spain', }
    const country = data.plus_code.compound_code.split(",")[1];
    const address = data.plus_code.compound_code.split(" ").slice(1).join(" ");
    // throw new Error('Failed to Reverse Geocoding');

    return {
      sublocality: "",
      locality: "",
      country: country,
      country_short: country,
      formatted_address: address,
    };
  }

  if (data.status !== "OK") {
    let message = "Failed to Reverse Geocoding: " + data.status;
    if (data.error_message) {
      message += " " + data.error_message;
    }
    console.error(message);
    throw new Error(message);
  }

  // Formatted address --
  let formatted_address = data.results[0].formatted_address.split(",");
  formatted_address.pop();
  formatted_address = formatted_address.join(",");

  // Return --
  return {
    sublocality: data.results[0].address_components[0].long_name,
    locality: data.results[0].address_components[1].long_name,
    country: data.results[0].address_components[4].long_name,
    country_short: data.results[0].address_components[4].short_name,
    formatted_address: formatted_address,
  };
}

/**
 * @param {string} title
 * @param {any} url
 */
function devLog(title, url) {
  /* @ts-expect-error */
  if (import.meta.env.MODE === "development") {
    console.log(`> fetch [${title}]:`, url);
  }
}
