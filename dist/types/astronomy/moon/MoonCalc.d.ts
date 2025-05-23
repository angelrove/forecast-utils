export default MoonCalc;
declare namespace MoonCalc {
    export { data };
    export { dataExt };
    export { times };
    export { emoji };
    export { getUpOrDown };
}
/**
 * @param {number} latitude
 * @param {number} longitude
 * @param {Date} [date=new Date()]
 * @param {string} [language=es-ES]
 * @returns {MoonData}
 */
declare function data(latitude: number, longitude: number, date?: Date | undefined, language?: string | undefined): MoonData;
/**
 * Información de la luna para una fecha y hora dadas.
 * La fecha y hora se devolverán en la zona horaria local.
 *
 * @param {number} latitude
 * @param {number} longitude
 * @param {Date} [date=new Date()]
 * @param {string} [language=es-ES]
 * @returns {{ date: string, time: string, illumination: string, phase: string, phaseId: string, emoji: string, parallacticAngle: number, angle: number, position: AstroPosition, next: object }}
 */
declare function dataExt(latitude: number, longitude: number, date?: Date | undefined, language?: string | undefined): {
    date: string;
    time: string;
    illumination: string;
    phase: string;
    phaseId: string;
    emoji: string;
    parallacticAngle: number;
    angle: number;
    position: AstroPosition;
    next: object;
};
/**
 * @param {number} latitude
 * @param {number} longitude
 * @param {string} timezoneId
 * @param {Date} date
 * @returns {{rise: string, set: string, highest: string}}
 */
declare function times(latitude: number, longitude: number, timezoneId: string, date?: Date): {
    rise: string;
    set: string;
    highest: string;
};
/**
 * @param {number} latitude
 * @param {number} longitude
 * @param {Date} [date=new Date()]
 * @returns {string} - Emoji of the moon phase
 */
declare function emoji(latitude: number, longitude: number, date?: Date | undefined): string;
/**
 * @param {number} altitude
 * @param {Date} highest
 * @returns {string} - Up or down emoji
 */
declare function getUpOrDown(altitude: number, highest: Date): string;
