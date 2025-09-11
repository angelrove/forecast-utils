/**
 * @memberof module:OpenMeteo
 */

export type ForecastData = {
  data: any; // 👈 Cambiar al tipo real que devuelve `transformer`
  apiUrl: string;
  isLoading: boolean;
  isError: unknown;
};

export type WeatherSymbol = {
  icon: string;
  description: string;
};
