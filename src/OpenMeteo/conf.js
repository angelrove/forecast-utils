import { logger } from "../utils/logger";

const ApiInfo = {
  host: "https://api.open-meteo.com/v1",
  pathMain: "/forecast?timezone=auto&",
};

/**
 * @param {string} url
 */
export async function fetcher(url) {
  logger.fetch("OpemMeteo", url);
  return fetch(url).then((res) => res.json());
}

/**
 * Get path for OpenMeteo API
 *
 * @param {number} lat
 * @param {number} lon
 * @param {string} path
 * @returns {string}
 */
export function getPath(lat, lon, path) {
  return (
    ApiInfo.host +
    ApiInfo.pathMain +
    "latitude=" +
    lat +
    "&longitude=" +
    lon +
    "&" +
    path
  );
}
