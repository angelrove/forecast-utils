export default TimeDateStr;
declare namespace TimeDateStr {
    export { dateFormat };
    export { nowString };
    export { timeString };
    export { getLocalTimeFromTz };
}
/**
 * Returns a date as a formated string.
 *
 * @param {Date} [date=new Date()] La fecha a formatear.
 * @returns {string} La fecha formateada.
 * @memberof module:Utils/TimeDateStr
 */
declare function dateFormat(date?: Date): string;
/**
 * Returns a now time as a formated string.
 *
 * @param {boolean} sec
 * @returns {String} now time as a formated string
 * @memberof module:Utils/TimeDateStr
 */
declare function nowString(sec?: boolean): string;
/**
 * Returns a time as a formated string.
 *
 * @param {Date} [date]
 * @param {boolean} [sec=false]
 * @returns {string} La fecha formateada.
 * @memberof module:Utils/TimeDateStr
 */
declare function timeString(date?: Date, sec?: boolean): string;
/**
 * Return the local time string from a given timezone.
 *
 * @param {string} timeZone - The timezone string (e.g., 'America/New_York').
 * @param {Date | number} [date=new Date()] - The date object to format. Defaults to the current date.
 * @returns {string} - The formatted local time string.
 * @memberof module:Utils/TimeDateStr
 */
declare function getLocalTimeFromTz(timeZone: string, date?: Date | number): string;
