/**
 * MoonCalc for calculating moon times, positions, and phases.
 *
 *   import { MoonCalc } from ...
 *
 * Importante!:
 * ¡Solo proporcionar HORA LOCAL DEL SISTEMA!: 'new Date()'
 *
 * @module Astronomy/MoonCalc
 */

/* @ts-expect-error */
import SunCalc from "suncalc3";
import TimeDateStr from "../../utils/timehelpers.js";
import { parseBasicData } from "./parseBasicData.js";

/**
 * MoonCalc.
 * @ignore
 */
const MoonCalc = {
  data,
  dataExt,
  times,
  emoji,
  getUpOrDown,
};
export default MoonCalc;

/**
 * @memberof module:Astronomy
 * @typedef {object} AstroPosition
 * @property {number} altitude
 * @property {number} azimuth
 * @property {string} direction
 * @property {string} direction_full``
 */

/**
 * @memberof module:Astronomy/MoonCalc
 * @typedef {object} MoonDataExt
 * @property {string} date
 * @property {string} time
 * @property {string} illumination
 * @property {string} phase
 * @property {string} phaseId
 * @property {string} emoji
 * @property {number} parallacticAngle
 * @property {number} angle
 * @property {AstroPosition} position
 * @property {object} next
 */

/**
 * @memberof module:Astronomy/MoonCalc
 * @typedef {object} MoonData
 * @property {AstroPosition} position
 * @property {object} next
 * @property {string} next.newMoon - Date of the next new moon.
 * @property {string} next.fullMoon - Date of the next full moon.
 */

/**
 * Mapa de fases lunares.
 * { phaseId, phaseName }
 *
 * @type {Object.<string, string>}
 * @memberof module:Astronomy/MoonCalc
 */
const phasesES = {
  newMoon: "Luna Nueva",
  waxingCrescentMoon: "Luna Creciente",
  firstQuarterMoon: "Cuarto Creciente",
  waxingGibbousMoon: "Gibosa creciente",
  fullMoon: "Luna Llena",
  waningGibbousMoon: "Gibosa menguante",
  thirdQuarterMoon: "Cuarto Menguante",
  waningCrescentMoon: "Luna Menguante",
};

//--------------------------------------------------------------------
/**
 * @param {number} latitude
 * @param {number} longitude
 * @param {Date} [date=new Date()]
 * @param {string} [language=es-ES]
 * @returns {MoonData} Moon info object
 * @memberof module:Astronomy/MoonCalc
 */
function data(latitude, longitude, date = new Date(), language = "es-ES") {
  // date.setHours(date.getHours() + 0); // debug
  const data = SunCalc.getMoonData(date, latitude, longitude);
  // console.log("%cdebug:", "color:yellow", data.illumination.next.newMoon.value);

  return parseBasicData(data, language);
}
//--------------------------------------------------------------------
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
function dataExt(latitude, longitude, date = new Date(), language = "es-ES") {
  const data = SunCalc.getMoonData(date, latitude, longitude);

  // Illumination
  const illumination =
    Number((data.illumination.fraction * 100).toFixed(1)) + "%";

  // Phase
  const emoji = data.illumination.phase.emoji;
  const phaseId = String(data.illumination.phase.id);
  const phase = phasesES[phaseId];

  // Angle
  const parallacticAngle = data.parallacticAngleDegrees;
  const angle =
    phaseId === "fullMoon" || phaseId === "newMoon" ? 0 : parallacticAngle;

  // Basic data
  const basicData = parseBasicData(data, language);

  // Return ---
  return {
    date: TimeDateStr.dateFormat(date),
    time: TimeDateStr.timeString(date),
    illumination: illumination,
    phase: phase,
    phaseId: phaseId,
    emoji: emoji,
    parallacticAngle: parallacticAngle,
    angle: Math.round(angle),
    position: basicData.position,
    next: basicData.next,
  };
}
//--------------------------------------------------------------------
/**
 * @param {number} latitude
 * @param {number} longitude
 * @param {Date} [date=new Date()]
 * @returns {string} Emoji of the moon phase
 * @memberof module:Astronomy/MoonCalc
 */
function emoji(latitude, longitude, date = new Date()) {
  const data = SunCalc.getMoonData(date, latitude, longitude);
  return data.illumination.phase.emoji;
}
//--------------------------------------------------------------------
/**
 * @param {number} latitude
 * @param {number} longitude
 * @param {string} timezoneId
 * @param {Date} date
 * @returns {{rise: string, set: string, highest: string}} Moon times
 * @memberof module:Astronomy/MoonCalc
 */
function times(latitude, longitude, timezoneId, date = new Date()) {
  const ret = {
    rise: "",
    set: "",
    highest: "",
  };

  const times = SunCalc.getMoonTimes(date, latitude, longitude);
  if (times.alwaysUp) {
    ret.rise = "always up";
    ret.set = "always up";
    ret.highest = "always up";
    return ret;
  }

  if (times.alwaysDown) {
    ret.rise = "always down";
    ret.set = "always down";
    ret.highest = "always down";
    return ret;
  }

  ret.rise = TimeDateStr.getLocalTimeFromTz(timezoneId, times.rise);
  ret.set = TimeDateStr.getLocalTimeFromTz(timezoneId, times.set);
  ret.highest = TimeDateStr.getLocalTimeFromTz(timezoneId, times.highest);
  return ret;
}
//--------------------------------------------------------------------
/**
 * @param {number} altitude
 * @param {Date} highest
 * @returns {string} - Up or down emoji
 * @memberof module:Astronomy/MoonCalc
 */
function getUpOrDown(altitude, highest) {
  const now = new Date();
  let upOrDown = ""; // ◓ ◒

  if (altitude > 0) {
    if (highest.getHours() > now.getHours()) {
      upOrDown = "🔺";
    } else {
      upOrDown = "🔻";
    }
  }
  // console.log(highest.getHours(), now.getHours());

  return upOrDown;
}
//--------------------------------------------------------------------
