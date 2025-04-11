export interface MapLocation {
  lat: number;
  lng: number;
  name: string;
  country?: string;
  googleMapsUrl?: string;
  openStreetMapsUrl?: string;
}

export interface OpenStreetMapResponse {
  lat: string;
  lon: string;
  display_name: string;
  address?: {
    country?: string;
  };
  osm_id?: number;
  osm_type?: string;
}

