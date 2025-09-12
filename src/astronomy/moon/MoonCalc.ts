/**
 * MoonCalc for calculating moon times, positions, and phases.
 *
 *   import { MoonCalc } from ...
 *
 * Importante!:
 * ¡Solo proporcionar HORA LOCAL DEL SISTEMA!: 'new Date()'
 *
 */

/* @ts-expect-error */
import SunCalc from "suncalc3";
import { TimeDateStr } from "../../utils/timehelpers";
import { parseBasicData } from "./parseBasicData.js";
import type { MoonData, MoonDataExt, MoonTimes } from "./types.js";

/**
 * MoonCalc.
 */
export const MoonCalc = {
  data, dataExt, times, emoji, getUpOrDown,
};

/**
 * Mapa de fases lunares.
 * { phaseId, phaseName }
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

type PhaseId = keyof typeof phasesES;

//--------------------------------------------------------------------
export function data(
  latitude: number,
  longitude: number,
  date: Date = new Date(),
  language: string = "es-ES"): MoonData
  {
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
 */
export function dataExt(
  latitude: number,
  longitude: number,
  date: Date = new Date(),
  language: string = "es-ES"): MoonDataExt
  {
  const data = SunCalc.getMoonData(date, latitude, longitude);

  // Illumination
  const illumination =
    Number((data.illumination.fraction * 100).toFixed(1)) + "%";

  // Phase
  const emojiStr = data.illumination.phase.emoji;
  const phaseId = String(data.illumination.phase.id) as PhaseId;
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
    emoji: emojiStr,
    parallacticAngle: parallacticAngle,
    angle: Math.round(angle),
    position: basicData.position,
    next: basicData.next,
  };
}
//--------------------------------------------------------------------
export function emoji(
  latitude: number,
  longitude: number,
  date: Date = new Date()): string
  {
  const data = SunCalc.getMoonData(date, latitude, longitude);
  return data.illumination.phase.emoji;
}
//--------------------------------------------------------------------
export function times(
  latitude: number,
  longitude: number,
  timezoneId: string,
  date: Date = new Date()): MoonTimes
  {
  const ret = {} as MoonTimes;

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
export function getUpOrDown(altitude: number, highest: Date): string {
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
