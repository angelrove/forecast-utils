export type WindLevel = {
  id: number; // Level ID
  speed: number; // Minimum wind speed for this level
  color: string;
  tx: string;
  txEn: string;
};

const WIND_LEVELS: WindLevel[] = [
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
 * @param speed Wind speed in km/h
 * @return Wind level object or null if speed is null
 */
export function getWindLevel(speed: number): WindLevel | null {
  if (typeof speed !== "number") return null;

  const theSpeed = Math.round(speed);

  for (const level of WIND_LEVELS) {
    if (theSpeed < level.speed) return level;
  }
  return WIND_LEVELS[WIND_LEVELS.length - 1]; // fallback defensivo
}
