import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, map } from 'rxjs';
import {MapLocation, OpenStreetMapResponse} from '../../../models/map.model';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private readonly apiUrl = 'https://nominatim.openstreetmap.org/search?format=json&q='

  constructor(private http: HttpClient) { }

  getLocation(query: string): Observable<MapLocation[]> {
    const params ={
      q: query,
      format: 'json',
      limit: 5
    }
    return this.http.get<OpenStreetMapResponse[]>(this.apiUrl, {params}).pipe(
      map(response => response.map(location => this.transformLocation(location)))
    )
  }
  private transformLocation(location: OpenStreetMapResponse): MapLocation {
    return {
      lat: parseFloat(location.lat),
      lng: parseFloat(location.lon),
      name: location.display_name,
      country: location.address?.country ?? 'Unknown',
      googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lon}`,
      openStreetMapsUrl: location.osm_id ?
        `https://www.openstreetmap.org/${location.osm_type}/${location.osm_id}`
        : ''
    }
  }
}

