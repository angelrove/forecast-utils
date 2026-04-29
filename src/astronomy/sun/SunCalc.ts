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

/* @ts-ignore */
import { default as SunCalc3 } from "suncalc3";
import { degreesToCompass } from "../../utils/degreesToCompass";
import { TimeDateStr } from "../../utils/timehelpers";

/**
 * SunCalc.
 */
export const SunCalc = {
  all,
  times,
  getSolarTime,
  position,
  getIsNight,
  getIsNightNow,
  getPhase,
};

//-------------------------------------------------------
/**
 * @param {Date} date
 * @param {number} latitude
 * @param {number} longitude
 * @param {string} timezoneId
 * @returns {{ sunTimes: object, sunPosition: object, sunPhase: string }}
 * { sunTimes: object, sunPosition: object, sunPhase: string }
 */
export function all(
  date: Date,
  latitude: number,
  longitude: number,
  timezoneId: string,
) {
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
 * { date: Date, sunrise: string, sunset: string, noon: string, dawn: string, dusk: string }
 */
export function times(
  date: Date,
  latitude: number,
  longitude: number,
  timezoneId: string,
) {
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
 * @param {string} offsetSign "+" or "-"
 * @param {number} offset UTC offset in hours
 * @returns {string} Local time in "HH:mm" format
 */
export function getSolarTime(
  date: Date,
  lng: number,
  offsetSign: "+" | "-",
  offset: number | string,
): string {
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
 * {date: string, azimuth: number, direction: string, direction_full: string, altitude: number, zenith: number, declination: number}
 */
export function position(
  latitude: number,
  longitude: number,
  date: Date = new Date(),
  language: string = "es-ES",
) {
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
 * @returns {boolean} true if it's night, false otherwise
 */
export function getIsNight(
  lat: number,
  lon: number,
  timezoneId: string,
  date: Date,
  dateStr: string,
): boolean {
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
 * @param {number} lat
 * @param {number} lon
 * @returns {boolean} true if it's night, false otherwise
 */
// NO FUNCIONA ??? --------
export function getIsNightNow(lat: number, lon: number): boolean {
  const date = new Date();

  // Cálculo de día/noche usando las coordenadas
  const times = SunCalc3.getSunTimes(date, lat, lon);

  // Comparamos el objeto Date actual con los límites astronómicos
  // times.sunsetStart
  const isDay =
    date > times.sunriseEnd.value && date < times.goldenHourDuskStart.value;
  return !isDay;
}
//-------------------------------------------------------
/**
 * @param {number} altitude
 * @param {string} noon
 * @returns {string} The phase of the sun based on its altitude
 */
export function getPhase(altitude: number, noon: string): string {
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
