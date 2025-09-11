/**
 * @typedef {object} AlertLevel
 * @property {number} levelNum - The alert level number.
 * @property {string} level - The alert level string (e.g., "red", "orange", "yellow").
 * @property {number} precipitation - The precipitation threshold for the alert level.
 * @property {number} showers - The showers threshold for the alert level.
 * @memberof module:Utils
 */

/**
 * Alert levels for rain and showers
 *
 * @type {AlertLevel[]}
 * @memberof module:Utils
 */
const ALERT_LEVEL = [
  { levelNum: 3, level: "red", precipitation: 120, showers: 60 },
  { levelNum: 2, level: "orange", precipitation: 80, showers: 30 },
  { levelNum: 1, level: "yellow", precipitation: 50, showers: 18 },
];

/**
 * Get warning by today and tomorrow
 *
 * @param {number} precipitationSumToday
 * @param {number} precipitationSumTomorrow
 * @param {number} showersSumToday
 * @param {number} showersSumTomorrow
 * @returns {{ levelNum: number, level: string, message: string, day: number } | null}
 * {{ levelNum: number, level: string, message: string, day: number } | null}
 * @memberof module:Utils
 */
export function getWarningByDays(
  precipitationSumToday,
  precipitationSumTomorrow,
  showersSumToday,
  showersSumTomorrow,
) {
  // Today
  const wToday = getWarning(precipitationSumToday, showersSumToday);
  if (wToday) {
    return {
      ...wToday,
      day: 0,
    };
  }

  // Tomorrow
  const wTomorrow = getWarning(precipitationSumTomorrow, showersSumTomorrow);
  if (wTomorrow) {
    return {
      ...wTomorrow,
      day: 1,
    };
  }

  return null;
}

/**
 * Get warning by precipitation and showers
 *
 * @export
 * @param {number} precipitation
 * @param {number} showers
 * @returns {{ levelNum: number, level: string, message: string } | null}
 * {{ levelNum: number, level: string, message: string } | null}
 * @memberof module:Utils
 */
export function getWarning(precipitation, showers) {
  const warningRain = getWarningRain(precipitation);
  const warningShowers = getWarningShowers(showers);
  // console.log(warningRain);
  // console.log(warningShowers);

  if (warningRain && warningShowers) {
    return warningRain.levelNum > warningShowers.levelNum
      ? warningRain
      : warningShowers;
  }
  if (warningRain) {
    return warningRain;
  }
  if (warningShowers) {
    return warningShowers;
  }

  return null;
}

//----------------------------------------------------------------
// PRIVATE FUNCTIONS
//----------------------------------------------------------------
/**
 * Get warning by rain
 * @private
 * @param {number} precipitation
 * @returns {{ levelNum: number, level: string, message: string } | null}
 */
function getWarningRain(precipitation) {
  for (let i = 0; i < ALERT_LEVEL.length; i++) {
    if (precipitation >= ALERT_LEVEL[i].precipitation) {
      return {
        levelNum: ALERT_LEVEL[i].levelNum,
        level: ALERT_LEVEL[i].level,
        message: "Por precipitacion acumulada en 24 horas.",
      };
    }
  }
  return null;
}

/**
 * Get warning by showers
 *
 * @private
 * @param {number} showers
 * @returns {{ levelNum: number, level: string, message: string } | null}
 */
function getWarningShowers(showers) {
  for (let i = 0; i < ALERT_LEVEL.length; i++) {
    if (showers >= ALERT_LEVEL[i].showers) {
      return {
        levelNum: ALERT_LEVEL[i].levelNum,
        level: ALERT_LEVEL[i].level,
        message: "Chubascos intensos.",
      };
    }
  }
  return null;
}
