export type GeocodingAddress = {
  sublocality: string;
  locality: string;
  country: string;
  country_short: string;
  formatted_address: string;
};

export type ResolvedLocation = {
  latitude: number;
  longitude: number;
  // Address
  sublocality: string;
  locality: string;
  country: string;
  country_short: string;
  formatted_address: string;
};
