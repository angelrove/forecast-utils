// @ts-nocheck
/**
 * @module MoonCalc
 * @description
 * MoonCalc for calculating moon times, positions, and phases.
 * - import { MoonCalc } from '@angelrov/forecast';
 */

// @ts-ignore
import SunCalc from "suncalc3";
import { dateFormat, getLocalTimeFromTz, timeString } from "../timehelpers.js";
import { parseBasicData } from "./parseBasicData.js";

/**
 * IMPORTANTE!!:
 * ¡Solo proporcionar HORA LOCAL DEL SISTEMA!: 'new Date()'
 */

/**
 * Mapa de fases lunares.
 *
 * @type {Object.<string, string>}
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

const MoonCalc = {
  data,
  dataExt,
  times,
  emoji,
  getUpOrDown,
};
export default MoonCalc;

//--------------------------------------------------------------------
/**
 * @param {number} latitude
 * @param {number} longitude
 * @param {Date} [date=new Date()]
 * @param {string} [language=es-ES]
 * @returns {MoonData}
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
 * @returns {{ date: string, time: string, illumination: string, phase: string, phaseId: string, emoji: string, parallacticAngle: number, angle: number, position: AstroPosition, next: object }}
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
    date: dateFormat(date),
    time: timeString(date),
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
 * @returns {string} - Emoji of the moon phase
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
 * @returns {{rise: string, set: string, highest: string}}
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

  ret.rise = getLocalTimeFromTz(timezoneId, times.rise);
  ret.set = getLocalTimeFromTz(timezoneId, times.set);
  ret.highest = getLocalTimeFromTz(timezoneId, times.highest);
  return ret;
}
//--------------------------------------------------------------------
/**
 * @param {number} altitude
 * @param {Date} highest
 * @returns {string} - Up or down emoji
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
