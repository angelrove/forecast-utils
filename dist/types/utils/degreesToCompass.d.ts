/**
 * Convert degrees to compass designation
 *
 * @param {number} degrees
 * @param {string} language - Language code ("en-US", "es-ES", "auto")
 * @returns {{short: string, full: string}}
 */
export function degreesToCompass(degrees: number, language?: string): {
    short: string;
    full: string;
};
