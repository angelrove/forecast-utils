export type AstroPosition = {
    altitude: number;
    azimuth: number;
    direction: string;
    direction_full: string;
};
export type LocalTimeData = {
    /**
     * - The local time.
     */
    time: Date;
    /**
     * - The formatted local time string.
     */
    timeStr: string;
    /**
     * - The timezone name.
     */
    timezone: string;
    /**
     * - The timezone ID.
     */
    timezoneId: string;
    /**
     * - The UTC offset in hours.
     */
    offset: number;
    /**
     * - The sign of the offset ('+' or '-').
     */
    offsetSign: string;
    /**
     * - The DST offset in hours.
     */
    dstOffset: number;
};
