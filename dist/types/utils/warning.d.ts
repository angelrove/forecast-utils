/**
 * Get warning by today and tomorrow
 *
 * @param {number} precipitationSumToday
 * @param {number} precipitationSumTomorrow
 * @param {number} showersSumToday
 * @param {number} showersSumTomorrow
 * @returns {{ levelNum: number, level: string, message: string, day: number } | null}
 * @memberof module:Utils
 */
export function getWarningByDays(precipitationSumToday: number, precipitationSumTomorrow: number, showersSumToday: number, showersSumTomorrow: number): {
    levelNum: number;
    level: string;
    message: string;
    day: number;
} | null;
/**
 * Get warning by precipitation and showers
 *
 * @export
 * @param {number} precipitation
 * @param {number} showers
 * @returns {{ levelNum: number, level: string, message: string } | null}
 * @memberof module:Utils
 */
export function getWarning(precipitation: number, showers: number): {
    levelNum: number;
    level: string;
    message: string;
} | null;
export type AlertLevel = {
    /**
     * - The alert level number.
     */
    levelNum: number;
    /**
     * - The alert level string (e.g., "red", "orange", "yellow").
     */
    level: string;
    /**
     * - The precipitation threshold for the alert level.
     */
    precipitation: number;
    /**
     * - The showers threshold for the alert level.
     */
    showers: number;
};
