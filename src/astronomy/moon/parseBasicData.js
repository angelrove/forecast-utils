// @ts-nocheck
import { degreesToCompass } from "../../utils/degreesToCompass";
import { TimeDateStr } from "../../utils/timehelpers";

/**
 * Parse basic data from SunCalc
 *
 * @private
 * @param {any} data
 * @param {string} language
 * @returns {MoonData}
 */
export function parseBasicData(data, language) {
  // Position ---
  const altitude = Number(data.altitudeDegrees.toFixed(1));
  const azimuth = Math.round(data.azimuthDegrees);
  const direction = degreesToCompass(data.azimuthDegrees, language);

  // Next moon ---
  const nextNewMoon = TimeDateStr.dateFormat(
    new Date(data.illumination.next.newMoon.value),
  );
  const nextFullMoon = TimeDateStr.dateFormat(
    new Date(data.illumination.next.fullMoon.value),
  );

  return {
    position: {
      // up_down: null,
      altitude: altitude,
      azimuth: azimuth,
      direction: direction.short,
      direction_full: direction.full,
    },
    next: {
      newMoon: nextNewMoon,
      fullMoon: nextFullMoon,
    },
  };
}
