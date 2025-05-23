export default SunCalc;
declare namespace SunCalc {
    export { all };
    export { times };
    export { getSolarTime };
    export { position };
    export { getIsNight };
    export { getPhase };
}
/**
 * @param {Date} date
 * @param {number} latitude
 * @param {number} longitude
 * @param {string} timezoneId
 * @returns {{ sunTimes: object, sunPosition: object, sunPhase: string }}
 */
declare function all(date: Date, latitude: number, longitude: number, timezoneId: string): {
    sunTimes: object;
    sunPosition: object;
    sunPhase: string;
};
/**
 * @param {Date} date
 * @param {number} latitude
 * @param {number} longitude
 * @param {string} timezoneId
 * @returns {{ date: Date, sunrise: string, sunset: string, noon: string, dawn: string, dusk: string }}
 */
declare function times(date: Date, latitude: number, longitude: number, timezoneId: string): {
    date: Date;
    sunrise: string;
    sunset: string;
    noon: string;
    dawn: string;
    dusk: string;
};
/**
 * @param {Date} date
 * @param {number} lng
 * @param {string} offsetSign - "+" or "-"
 * @param {number} offset - UTC offset in hours
 * @returns {string} - Local time in "HH:mm" format
 */
declare function getSolarTime(date: Date, lng: number, offsetSign: string, offset: number): string;
/**
 * @param {number} latitude
 * @param {number} longitude
 * @returns {{date: string, azimuth: number, direction: string, direction_full: string, altitude: number, zenith: number, declination: number}}
 */
declare function position(latitude: number, longitude: number, date?: Date, language?: string): {
    date: string;
    azimuth: number;
    direction: string;
    direction_full: string;
    altitude: number;
    zenith: number;
    declination: number;
};
/**
 * @param {number} lat
 * @param {number} lon
 * @param {string} timezoneId
 * @param {number | Date} date
 * @param {string} dateStr
 * @returns {boolean} - true if it's night, false otherwise
 */
declare function getIsNight(lat: number, lon: number, timezoneId: string, date: number | Date, dateStr: string): boolean;
/**
 * @param {number} altitude
 * @param {string} noon
 * @returns {string} - The phase of the sun based on its altitude
 */
declare function getPhase(altitude: number, noon: string): string;
