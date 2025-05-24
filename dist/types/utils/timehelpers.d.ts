export default TimeDateStr;
declare namespace TimeDateStr {
    export { dateFormat };
    export { getLocalTimeFromTz };
    export { nowString };
    export { timeString };
}
/**
 * Returns a date as a formated string.
 *
 * @param {Date} [date=new Date()] La fecha a formatear.
 * @returns {string} La fecha formateada.
 * @memberof module:Utils
 */
declare function dateFormat(date?: Date | undefined): string;
/**
 * Get the local time from a given timezone.
 *
 * @param {string} timeZone - The timezone string (e.g., 'America/New_York').
 * @param {Date | number} [date=new Date()] - The date object to format. Defaults to the current date.
 * @returns {string} - The formatted local time string.
 * @memberof module:Utils
 */
declare function getLocalTimeFromTz(timeZone: string, date?: number | Date | undefined): string;
/**
 * Returns a now time as a formated string.
 *
 * @param {boolean} sec
 * @returns {String}
 * @memberof module:Utils
 */
declare function nowString(sec?: boolean): string;
/**
 * Returns a time as a formated string.
 *
 * @param {Date} [date]
 * @param {boolean} [sec=false]
 * @returns {string} La fecha formateada.
 * @memberof module:Utils
 */
declare function timeString(date?: Date | undefined, sec?: boolean | undefined): string;
