/**
 * @module astronomy/time-date
 */
/**
 * Formatea una fecha a un string legible.
 *
 * @param {Date} [date]
 * @param {boolean} [sec=false]
 * @returns {string} La fecha formateada.
 */
export function timeString(date?: Date | undefined, sec?: boolean | undefined): string;
export function nowString(sec?: boolean): string;
/**
 * Formatea una fecha a un string legible.
 *
 * @param {Date} [date=new Date()] La fecha a formatear.
 * @returns {string} La fecha formateada.
 */
export function dateFormat(date?: Date | undefined): string;
/**
 * Get local time from timezone
 *
 * @param {string} timeZone - The timezone string (e.g., 'America/New_York').
 * @param {Date | number} [date=new Date()] - The date object to format. Defaults to the current date.
 * @returns {string} - The formatted local time string.
 */
export function getLocalTimeFromTz(timeZone: string, date?: number | Date | undefined): string;
