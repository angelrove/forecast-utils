/**
 * @module Astronomy/helpers
 */
/**
 * Formatea una fecha a un string legible.
 *
 * @param {Date} [date]
 * @param {boolean} [sec=false]
 * @returns {string} La fecha formateada.
 * @memberof module:Astronomy/helpers
 */
export function timeString(date?: Date | undefined, sec?: boolean | undefined): string;
/**
 *
 * @param {boolean} sec
 * @returns {String}
 * @memberof module:Astronomy/helpers
 */
export function nowString(sec?: boolean): string;
/**
 * Formatea una fecha a un string legible.
 *
 * @param {Date} [date=new Date()] La fecha a formatear.
 * @returns {string} La fecha formateada.
 * @memberof module:Astronomy/helpers
 */
export function dateFormat(date?: Date | undefined): string;
/**
 * Get the local time from a given timezone.
 *
 * @param {string} timeZone - The timezone string (e.g., 'America/New_York').
 * @param {Date | number} [date=new Date()] - The date object to format. Defaults to the current date.
 * @returns {string} - The formatted local time string.
 * @memberof module:Astronomy/helpers
 */
export function getLocalTimeFromTz(timeZone: string, date?: number | Date | undefined): string;
