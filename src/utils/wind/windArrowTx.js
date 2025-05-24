/**
 * Convert wind direction in degrees to an arrow representation.
 */

/**
 * Convert wind direction in degrees to an arrow representation.
 *
 * @param {number} deg - Wind direction in degrees.
 * @memberof module:Utils
 */
export function windArrowTx(deg) {
  if (deg == null) {
    console.warn("WindDegToArrow.jsx: deg is undefined");
    return "deg?";
  }

  if (deg < 22.5) return "↓";
  if (deg < 67.5) return "↙";
  if (deg < 112.5) return "←";
  if (deg < 157.5) return "↖";
  if (deg < 202.5) return "↑";
  if (deg < 247.5) return "↗";
  if (deg < 292.5) return "→";
  if (deg < 337.5) return "↘";
}
