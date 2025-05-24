/**
 * Convert degrees to compass designation
 *
 * @param {number} degrees
 * @param {string} language - Language code ("en-US", "es-ES", "auto")
 * @returns {{short: string, full: string}} {short: string, full: string}
 * @memberof module:Utils
 */
export function degreesToCompass(degrees: number, language?: string): {
    short: string;
    full: string;
};
export type Compass = {
    /**
     * - Short compass designation
     */
    short: string;
    /**
     * - Full compass designation
     */
    full: string;
};
