/**
 * Parse hourly forecast data
 */

//------------------------------------------------------------------
/*
export function transformer(
  dataHourly: any,
  dayNum: number | false | null,
  nowTime: Date,
  isShort: boolean
)
  {
  // Obtener las horas del día seleccionado
  if (!dataHourly || !dayNum) return null;

  // if dayNum is String, convert to Number
  const dayNumInt = typeof dayNum === "string" ? Number.parseInt(dayNum, 10) : dayNum;

  // hourFrom / hourTo
  const limits = getHoursLimits2(dayNumInt, nowTime, isShort);

  // Data transform: limit hours to show and add more info
  // Open-Meteo usually nests under .hourly
  const hourlyData = dataHourly.hourly;

  return hourlyData.time.reduce((acc: any[], time: string, index: number) => {
    const date = new Date(time);

    // Filter Logic
    if (limits.hourFrom && date < limits.hourFrom) return acc;
    if (date > limits.hourTo) return acc;

    // Create a single object for THIS hour
    const hourEntry = {
      time: time,
      // Dynamically grab all other properties (temp, wind, etc.) for this index
      ...Object.keys(hourlyData).reduce((obj, key) => {
        if (key !== "time") obj[key] = hourlyData[key][index];
        return obj;
      }, {} as any)
    };

    acc.push(hourEntry);
    return acc;
  }, []);
}
 */
/**
 * Parse hourly forecast data
 */
export function transformer(
  dataHourly: any,
  dayNum: number | false | null,
  nowTime: Date,
  isShort: boolean
)
  {

  if (!dataHourly || !dayNum) return null;

  // if dayNum is String, convert to Number
  const dayNumInt = typeof dayNum === "string" ? Number.parseInt(dayNum, 10) : dayNum;

  // hourFrom / hourTo
  const limits = getHoursLimits2(dayNumInt, nowTime, isShort);

  // Data transform: limit hours to show and add more info
  const dataTransform = [];

  // Object.entries(dataHourly.hourly).forEach(([key, time]) => {
  // });

  for (let key = 0; key < dataHourly.hourly.time.length; key++) {
    const time = dataHourly.hourly.time[key];
    const date = new Date(time);

    // Hour limits ---
    if (limits.hourFrom && date < limits.hourFrom) {
      continue;
    }
    if (date > limits.hourTo) {
      continue;
    }

    // Add data ---
    dataTransform.push(dataHourly.hourly);
  }

  console.log('dataTransform', dataTransform);
  return dataTransform;
}

//------------------------------------------------------------------
/**
 * Limit hours to show
 */
/* function getHoursLimits(dayNum: number, nowTime: Date, isShort: boolean): { hourFrom: Date | null; hourTo: Date } {
  // Today ---
  if (dayNum === 0) {
    let hourTo = null;

    if (isShort === false) {
      hourTo = new Date(nowTime.getTime() + 25 * 60 * 60 * 1000); // +25 hours
    } else {
      hourTo = new Date(nowTime);
      hourTo.setHours(23, 0, 0, 0); // Today at 23:00
    }

    // remove minutes to 'nowTime'
    const hourFrom = new Date(nowTime);
    hourFrom.setMinutes(0, 0, 0); // Rounded to the previous full hour

    return {
      hourFrom: hourFrom,
      hourTo: hourTo,
    };
  }

  // Other days ----
  // To end of the day (23:00)
  const hourTo = new Date();
  hourTo.setDate(hourTo.getDate() + dayNum);
  hourTo.setHours(23, 0, 0, 0);

  return {
    hourFrom: null,
    hourTo: hourTo,
  };
}
 */
//------------------------------------------------------------------
function getHoursLimits2(dayNum: number, nowTime: Date, isShort: boolean) {
  const hourTo = new Date(nowTime);

  if (dayNum === 0) {
    // Today logic
    if (isShort) {
      hourTo.setHours(23, 59, 59, 999);
    } else {
      hourTo.setHours(hourTo.getHours() + 25);
    }

    const hourFrom = new Date(nowTime);
    hourFrom.setMinutes(0, 0, 0);

    return { hourFrom, hourTo };
  }

  // Future Days: From start of that day (00:00) to end of that day (23:59)
  const targetDay = new Date(nowTime);
  targetDay.setDate(targetDay.getDate() + dayNum);

  const hourFrom = new Date(targetDay);
  hourFrom.setHours(0, 0, 0, 0);

  const hourToDate = new Date(targetDay);
  hourToDate.setHours(23, 59, 59, 999);

  return { hourFrom, hourTo: hourToDate };
}
//------------------------------------------------------------------
