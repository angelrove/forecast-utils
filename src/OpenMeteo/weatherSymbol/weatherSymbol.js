/**
 * @module OpenMeteo:weatherSymbol
 */

import { getWeatherCodeEntry } from "./lib/getWeatherCodeEntry.js";

/**
 * Get weather symbol and description based on the weather code.
 *
 * @param {any} code
 * @param {number} [precipitation]
 * @param {boolean} night
 * @param {boolean} dark
 * @returns {{ icon: string, description: string }}
 */
export function weatherSymbol(
  code,
  precipitation = undefined,
  night = false,
  dark = false,
) {
  // Parse code ---
  let msgPlus = "";
  let theCode = code;
  if (precipitation && precipitation > 0.8) {
    if (theCode === 63) theCode = 65;
    if (theCode === 95) msgPlus = " y lluvia fuerte";
  }

  // Get weather entry ---
  const weatherCodeEntry = getWeatherCodeEntry(theCode);
  if (!weatherCodeEntry) {
    return {
      icon: "ws/icon_error.webp",
      description: "???",
    };
  }

  // Icon file ---
  const iconKey = weatherCodeEntry.icon;
  let iconFile = "icon_" + iconKey;

  // Night
  const nightIcons = ["0", "2", "48", "80", "85"];
  if (night && nightIcons.includes(iconKey)) {
    iconFile = iconFile + "_night";
  }

  // Light / Dark
  if (dark) {
    iconFile = "dark/" + iconFile;
  }

  // Return ---
  const ext = ".webp";
  return {
    icon: "ws/" + iconFile + ext,
    description: weatherCodeEntry.description + msgPlus,
  };
}
