/**
 * SunCalc for calculating solar times, positions, and phases.
 *
 *   import { SunCalc } from ...
 *
 * Importante:
 * ¡Solo proporcionar HORA LOCAL DEL SISTEMA!: 'new Date()'
 * Con excepción de 'getSolarTime()': recibe la hora local correspondiente a la localización dada.
 *
 * @module Astronomy/SunCalc
 */

// @ts-ignore
import { default as SunCalc3 } from "suncalc3";
import { degreesToCompass } from "../../utils/degreesToCompass.js";
import TimeDateStr from "../../utils/timehelpers.js";

/**
 * SunCalc.
 * @ignore
 */
const SunCalc = {
  all,
  times,
  getSolarTime,
  position,
  getIsNight,
  getPhase,
};
export default SunCalc;

//-------------------------------------------------------
/**
 * @param {Date} date
 * @param {number} latitude
 * @param {number} longitude
 * @param {string} timezoneId
 * @returns {{ sunTimes: object, sunPosition: object, sunPhase: string }}
 * @memberof module:Astronomy/SunCalc
 */
function all(date, latitude, longitude, timezoneId) {
  const sunTimes = SunCalc.times(date, latitude, longitude, timezoneId);
  const sunPosition = SunCalc.position(latitude, longitude, date);
  const sunPhase = SunCalc.getPhase(sunPosition.altitude, sunTimes.noon);

  return {
    sunTimes,
    sunPosition,
    sunPhase,
  };
}
//-------------------------------------------------------
// 'timeZone' es necesario para devolver las horas locales
/**
 * @param {Date} date
 * @param {number} latitude
 * @param {number} longitude
 * @param {string} timezoneId
 * @returns {{ date: Date, sunrise: string, sunset: string, noon: string, dawn: string, dusk: string }}
 * @memberof module:Astronomy/SunCalc
 */
function times(date, latitude, longitude, timezoneId) {
  const times = SunCalc3.getSunTimes(date, latitude, longitude);

  const sunTimes = {
    date: date,
    sunrise: TimeDateStr.getLocalTimeFromTz(
      timezoneId,
      times.sunriseStart.value,
    ),
    sunset: TimeDateStr.getLocalTimeFromTz(timezoneId, times.sunsetStart.value),
    noon: TimeDateStr.getLocalTimeFromTz(timezoneId, times.solarNoon.value),
    dawn: TimeDateStr.getLocalTimeFromTz(timezoneId, times.civilDawn.value),
    dusk: TimeDateStr.getLocalTimeFromTz(timezoneId, times.civilDusk.value),
  };

  // console.log(sunTimes);
  return sunTimes;
}
//-------------------------------------------------------
/**
 * @param {Date} date
 * @param {number} lng
 * @param {string} offsetSign - "+" or "-"
 * @param {number} offset - UTC offset in hours
 * @returns {string} - Local time in "HH:mm" format
 * @memberof module:Astronomy/SunCalc
 */
function getSolarTime(date, lng, offsetSign, offset) {
  // Convert offsetSign and offset to a numeric UTC offset (e.g., -3, +2)
  const utcOffset = (offsetSign === "-" ? -1 : 1) * Math.abs(Number(offset));
  const solarTime = SunCalc3.getSolarTime(date, lng, utcOffset);
  return TimeDateStr.timeString(solarTime);
}
//-------------------------------------------------------
/**
 * @param {number} latitude
 * @param {number} longitude
 * @returns {{date: string, azimuth: number, direction: string, direction_full: string, altitude: number, zenith: number, declination: number}}
 * @memberof module:Astronomy/SunCalc
 */
function position(latitude, longitude, date = new Date(), language = "es-ES") {
  const position = SunCalc3.getPosition(date, latitude, longitude);

  // Get text
  const direction = degreesToCompass(position.azimuthDegrees, language);

  return {
    date: TimeDateStr.dateFormat(date),
    azimuth: position.azimuthDegrees,
    direction: direction.short,
    direction_full: direction.full,
    altitude: Math.round(position.altitudeDegrees),
    zenith: position.zenithDegrees,
    declination: position.declination,
  };
}
//-------------------------------------------------------
// Sun phase
//-------------------------------------------------------
/**
 * @param {number} lat
 * @param {number} lon
 * @param {string} timezoneId
 * @param {number | Date} date
 * @param {string} dateStr
 * @returns {boolean} - true if it's night, false otherwise
 * @memberof module:Astronomy/SunCalc
 */
function getIsNight(lat, lon, timezoneId, date, dateStr) {
  const times = SunCalc3.getSunTimes(date, lat, lon);

  // se pueden comparar horas(hh:mm) estando en formato texto
  // y así no tenemos que tener en cuenta el día, mes.
  const timeUp = TimeDateStr.getLocalTimeFromTz(
    timezoneId,
    times.sunriseEnd.value,
  );
  const timeDown = TimeDateStr.getLocalTimeFromTz(
    timezoneId,
    times.goldenHourDuskStart.value,
  );

  return dateStr < timeUp || dateStr > timeDown;
}
//-------------------------------------------------------
/**
 * @param {number} altitude
 * @param {string} noon
 * @returns {string} - The phase of the sun based on its altitude
 * @memberof module:Astronomy/SunCalc
 */
function getPhase(altitude, noon) {
  const nowTime = TimeDateStr.nowString();

  let phase = "day";
  if (altitude < 4) {
    phase = nowTime > noon ? "dayEnd" : "dayStart";
  }
  if (altitude < 2) {
    phase = nowTime > noon ? "sunset" : "sunrise";
  }
  if (altitude < -5) {
    phase = nowTime > noon ? "dusk" : "dawn";
  }
  if (altitude < -18) {
    phase = "night";
  }

  return phase;
}
//-------------------------------------------------------
// function getPhase2(date, sunTimes, timeZone) {
// }
//-------------------------------------------------------
