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
export const weatherCodes = [
  { code: 0, icon: "0", description: "Cielo despejado" },
  { code: 1, icon: "0", description: "Principalmente despejado" },

  { code: 2, icon: "2", description: "Parcialmente nublado" },
  { code: 3, icon: "3", description: "Cubierto" },

  // Niebla
  { code: 45, icon: "45", description: "Niebla" },
  { code: 48, icon: "48", description: "Niebla ligera con escarcha" },

  // Llovizna
  { code: 51, icon: "51", description: "Llovizna débil" },
  { code: 53, icon: "51", description: "Llovizna moderada" },
  { code: 55, icon: "51", description: "Llovizna densa" },

  // Llovizna congelante
  { code: 56, icon: "51", description: "Llovizna débil, congelándose" },
  { code: 57, icon: "51", description: "Llovizna densa, congelándose" },

  // Lluvia
  { code: 61, icon: "51", description: "Lluvia ligera" },
  { code: 63, icon: "63", description: "Lluvia moderada o fuerte" },
  { code: 65, icon: "65", description: "Lluvia fuerte" },

  // Lluvia helada
  { code: 66, icon: "63", description: "Lluvia helada ligera" },
  { code: 67, icon: "65", description: "Lluvia moderada o fuerte" },

  // Chubascos de lluvia
  { code: 80, icon: "80", description: "Chubascos débiles" },
  { code: 81, icon: "81", description: "Chubascos moderados" },
  { code: 82, icon: "82", description: "Chubascos fuertes" },

  // Tormenta
  { code: 95, icon: "95", description: "Tormenta" },
  { code: 96, icon: "95", description: "Tormenta con algo de granizo" },
  { code: 99, icon: "99", description: "Tormenta fuerte, con granizo" },

  // Nieve
  { code: 71, icon: "71", description: "Nieve ligera" },
  { code: 73, icon: "71", description: "Nevada moderada" },
  { code: 75, icon: "75", description: "Fuertes nevadas" },

  // Chubascos de nieve
  { code: 85, icon: "85", description: "Chubascos de nieve débil" },
  { code: 86, icon: "86", description: "Chubascos de nieve fuertes" },

  // Granizo
  { code: 77, icon: "77", description: "Granizo" },
];
