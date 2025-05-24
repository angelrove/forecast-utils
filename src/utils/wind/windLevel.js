/**
 * @typedef {Object} WindLevel
 * @property {number} id - Level ID
 * @property {number} speed - Minimum wind speed for this level
 * @property {string} color - Color representing this level
 * @property {string} tx - Text representing this level
 * @property {string} txEn - Text representing this level
 * @memberof module:Utils
 */

/**
 * Ordered list of wind levels.
 *
 * @type {WindLevel[]}
 * @memberof module:Utils
 */
const WIND_LEVELS = [
  { id: 1, speed: 8, color: "green", tx: "Brisa", txEn: "Breeze" },
  { id: 2, speed: 16, color: "orange", tx: "Ligero", txEn: "Light" },
  { id: 3, speed: 23, color: "red", tx: "Moderado", txEn: "Moderate" },
  { id: 4, speed: 30, color: "red", tx: "Fuerte", txEn: "Strong" },
  { id: 5, speed: 50, color: "fuchsia", tx: "Muy fuerte", txEn: "Very strong" },
  {
    id: 6,
    speed: Number.POSITIVE_INFINITY,
    color: "fuchsia",
    tx: "Peligroso",
    txEn: "Dangerous",
  },
];

/**
 * Return the wind level based on the speed.
 *
 * @param {number} speed Wind speed in km/h
 * @return {WindLevel | null} Wind level object or null if speed is null
 * @memberof module:Utils
 */
export function getWindLevel(speed) {
  if (typeof speed !== "number") return null;

  const theSpeed = Math.round(speed);

  for (const level of WIND_LEVELS) {
    if (theSpeed < level.speed) return level;
  }
  return WIND_LEVELS[WIND_LEVELS.length - 1]; // fallback defensivo
}
