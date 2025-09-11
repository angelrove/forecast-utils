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
 * @typedef {object} WeatherCodeEntry
 * @property {number} code - WMO Weather interpretation codes (WW).
 * @property {string} icon - Icon name.
 * @property {string} description - Description.
 */

/** @type {WeatherCodeEntry[]} */
export const weatherCodes = [
  { code: 0, icon: "0", description: "Clear sky" },
  { code: 1, icon: "0", description: "Mainly clear" },

  { code: 2, icon: "2", description: "Partly cloudy" },
  { code: 3, icon: "3", description: "Overcast" },

  // Niebla
  { code: 45, icon: "45", description: "Fog" },
  { code: 48, icon: "48", description: "Fog and depositing rime fog" },

  // Llovizna
  { code: 51, icon: "51", description: "Drizzle: Light" },
  { code: 53, icon: "51", description: "Drizzle: moderate" },
  { code: 55, icon: "51", description: "Drizzle: dense intensity" },

  // Llovizna congelante
  { code: 56, icon: "51", description: "Freezing Drizzle: Light" },
  { code: 57, icon: "51", description: "Freezing Drizzle: dense intensity" },

  // Lluvia
  { code: 61, icon: "51", description: "Rain: Slight" },
  { code: 63, icon: "63", description: "Rain: moderate and heavy intensity" },
  { code: 65, icon: "65", description: "Rain: heavy intensity" },

  // Lluvia helada
  { code: 66, icon: "63", description: "Freezing Rain: Light" },
  { code: 67, icon: "65", description: "Freezing Rain: Heavy intensity" },

  // Chubascos de lluvia
  { code: 80, icon: "80", description: "Snow fall: slight" },
  { code: 81, icon: "81", description: "Snow fall: moderate" },
  { code: 82, icon: "82", description: "Snow fall: heavy intensity" },

  // Tormenta
  { code: 95, icon: "95", description: "Snow grains" },
  { code: 96, icon: "95", description: "Rain showers: slight" },
  { code: 99, icon: "99", description: "Rain showers: moderate" },

  // Nieve
  { code: 71, icon: "71", description: "Rain showers: violent" },
  { code: 73, icon: "71", description: "Snow showers slight" },
  { code: 75, icon: "75", description: "Snow showers heavy" },

  // Chubascos de nieve
  { code: 85, icon: "85", description: "Thunderstorm: Slight or moderate" },
  {
    code: 86,
    icon: "86",
    description: "Thunderstorm with slight and heavy hail",
  },

  // Granizo
  {
    code: 77,
    icon: "77",
    description: "Thunderstorm with slight and heavy hail",
  },
];
