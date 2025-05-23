/**
 * WMO Weather interpretation codes (WW)
 *
 * @link https://open-meteo.com/en/docs?hourly=temperature_2m,weather_code&daily=weather_code#weather_variable_documentation
 * @link https://www.meteomatics.com/en/api/available-parameters/derived-weather-and-convenience-parameters/general-weather-state/
 *
 * Code	      Description
 * 0          Clear sky
 * 1, 2, 3    Mainly clear, partly cloudy, and overcast
 * 45, 48	    Fog and depositing rime fog
 * 51, 53, 55	Drizzle: Light, moderate, and dense intensity
 * 56, 57	    Freezing Drizzle: Light and dense intensity
 * 61, 63, 65	Rain: Slight, moderate and heavy intensity
 * 66, 67	    Freezing Rain: Light and heavy intensity
 * 71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
 * 77	        Snow grains
 * 80, 81, 82	Rain showers: Slight, moderate, and violent
 * 85, 86	    Snow showers slight and heavy
 * 95 *	      Thunderstorm: Slight or moderate
 * 96, 99 *	  Thunderstorm with slight and heavy hail
 */
/**
 * @typedef {Object} WeatherCodeEntry
 * @property {number} code - WMO Weather interpretation codes (WW).
 * @property {string} icon - Icon name.
 * @property {string} description - Description.
 */
/** @type {WeatherCodeEntry[]} */
export const weatherCodes: WeatherCodeEntry[];
export type WeatherCodeEntry = {
    /**
     * - WMO Weather interpretation codes (WW).
     */
    code: number;
    /**
     * - Icon name.
     */
    icon: string;
    /**
     * - Description.
     */
    description: string;
};
