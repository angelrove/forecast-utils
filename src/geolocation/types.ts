export type GeocodingAddress = {
  sublocality: string;
  locality: string;
  country: string;
  country_short: string;
  formatted_address: string;
};

export type Location = {
  latitude: number;
  longitude: number;
};

export type DetailedLocation = {
  latitude: number;
  longitude: number;
  // Address
  country: string;
  country_short: string;
  locality: string;
  sublocality: string;
  formatted_address: string;
}

  export type ResolvedLocation = {
  changed: boolean;
  location: DetailedLocation
};
