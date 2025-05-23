/**
 * Get the start and end dates based on the number of days from today.
 *
 * @param {number} numDay
 * @returns {{startDate: string, endDate: string}} - An object containing the start and end dates in YYYY-MM-DD format.
 */
export function getDatesFromNumDays(numDay) {
  // Dates: Today / End ---
  const startDate = new Date();
  startDate.setDate(startDate.getDate() + numDay);

  const endDate = new Date();
  endDate.setDate(endDate.getDate() + numDay + 1);

  return {
    startDate: startDate.toISOString().split("T")[0],
    endDate: endDate.toISOString().split("T")[0],
  };
}
