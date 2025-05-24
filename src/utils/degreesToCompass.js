/**
 * Convert degrees to compass designation
 */

/**
 * @typedef {Object} Compass
 * @property {string} short - Short compass designation
 * @property {string} full - Full compass designation
 */

/**
 * English compass designations
 * @type {Compass[]}
 * @constant
 * @property {string} short - Short compass designation
 * @property {string} full - Full compass designation
 */
const directions = [
  { short: "N", full: "North" },
  { short: "NE", full: "Northeast" },
  { short: "E", full: "East" },
  { short: "SE", full: "Southeast" },
  { short: "S", full: "South" },
  { short: "SW", full: "Southwest" },
  { short: "W", full: "West" },
  { short: "NW", full: "Northwest" },
];

/**
 * Spanish compass designations
 * @type {Compass[]}
 * @constant
 * @property {string} short - Short compass designation
 * @property {string} full - Full compass designation
 */
const directionsEs = [
  { short: "N", full: "Norte" },
  { short: "NE", full: "Noreste" },
  { short: "E", full: "Este" },
  { short: "SE", full: "Sureste" },
  { short: "S", full: "Sur" },
  { short: "SO", full: "Suroeste" },
  { short: "O", full: "Oeste" },
  { short: "NO", full: "Noroeste" },
];

/**
 * Convert degrees to compass designation
 *
 * @param {number} degrees
 * @param {string} language - Language code ("en-US", "es-ES", "auto")
 * @returns {{short: string, full: string}}
 * @memberof module:Utils
 */
export function degreesToCompass(degrees, language = "auto") {
  if (degrees == null) return { short: "?", full: "?" };

  const index = Math.round(degrees / 45) % 8;

  // auto detect language
  let lang = language;
  if (language === "auto") {
    lang = navigator.language;
  }

  // Parse the language
  if (lang.startsWith("es")) {
    return directionsEs[index];
  }

  return directions[index];
}
