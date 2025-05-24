export default MoonCalc;
export type AstroPosition = {
    altitude: number;
    azimuth: number;
    direction: string;
    /**
     * ``
     */
    direction_full: string;
};
export type MoonDataExt = {
    date: string;
    time: string;
    illumination: string;
    phase: string;
    phaseId: string;
    emoji: string;
    parallacticAngle: number;
    angle: number;
    position: AstroPosition;
    next: Object;
};
export type MoonData = {
    position: AstroPosition;
    next: {
        newMoon: string;
        fullMoon: string;
    };
};
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
 * @returns {MoonData} Moon info object
 * @memberof module:Astronomy/MoonCalc
 */
declare function data(latitude: number, longitude: number, date?: Date, language?: string): MoonData;
/**
 * Información de la luna para una fecha y hora dadas.
 * La fecha y hora se devolverán en la zona horaria local.
 *
 * @param {number} latitude
 * @param {number} longitude
 * @param {Date} [date=new Date()]
 * @param {string} [language=es-ES]
 * @returns {MoonDataExt} Full information
 * @memberof module:Astronomy/MoonCalc
 */
declare function dataExt(latitude: number, longitude: number, date?: Date, language?: string): MoonDataExt;
/**
 * @param {number} latitude
 * @param {number} longitude
 * @param {string} timezoneId
 * @param {Date} date
 * @returns {{rise: string, set: string, highest: string}} Moon times
 * @memberof module:Astronomy/MoonCalc
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
 * @returns {string} Emoji of the moon phase
 * @memberof module:Astronomy/MoonCalc
 */
declare function emoji(latitude: number, longitude: number, date?: Date): string;
/**
 * @param {number} altitude
 * @param {Date} highest
 * @returns {string} - Up or down emoji
 * @memberof module:Astronomy/MoonCalc
 */
declare function getUpOrDown(altitude: number, highest: Date): string;
