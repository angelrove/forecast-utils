const ApiInfo = {
  host: "https://api.open-meteo.com/v1",
  pathMain: "/forecast?timezone=auto&",
};

/**
 * @param {string} url
 */
export async function fetcher(url) {
  devLog("OpemMeteo", url);
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

/**
 * Console log for development
 *
 * @param {string} title
 * @param {string} url
 */
function devLog(title, url) {
  // @ts-ignore
  if (import.meta.env.MODE === "development") {
    // console.log('%c> fetch [' + title + ']:', 'color:#9e9', url);
    console.log("> fetch [" + title + "]:", url);
  }
}
