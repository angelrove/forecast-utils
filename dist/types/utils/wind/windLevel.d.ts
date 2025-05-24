/**
 * Return the wind level based on the speed.
 *
 * @param {number} speed Wind speed in km/h
 * @return {WindLevel | null} Wind level object or null if speed is null
 * @memberof module:Utils
 */
export function getWindLevel(speed: number): WindLevel | null;
export type WindLevel = {
    /**
     * - Level ID
     */
    id: number;
    /**
     * - Minimum wind speed for this level
     */
    speed: number;
    /**
     * - Color representing this level
     */
    color: string;
    /**
     * - Text representing this level
     */
    tx: string;
    /**
     * - Text representing this level
     */
    txEn: string;
};
