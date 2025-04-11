import {AfterViewInit, Component} from '@angular/core';
import {MapLocation} from '../../../../models/map.model';
import {MapService} from '../../services/map.service';
import * as L from 'leaflet';


@Component({
  selector: 'app-map-view',
  standalone: false,
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements AfterViewInit {
  locations: MapLocation[] = [];
  loading = false;
  searchQuery: string = '';
  error: string | null = null;
  map!: L.Map;
  mapLayers: L.Layer[] = [];
  options = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap contributors',
        crossOrigin: 'anonymous'
      })
    ],
    zoom: 10,
    center: L.latLng(6.2442, -75.5812)
  }

  constructor(private mapService: MapService) {}

  ngAfterViewInit() {
    this.initMap()
  }

  initMap(){
    this.map = L.map('map', this.options);
  }

  centerMap(lat: number, lng: number): void {
    if (this.map) {
      this.map.setView(L.latLng(lat, lng), this.options.zoom); // Centra el mapa en las coordenadas dadas
    }
  }

  fetchLocations(query: string): void {
    this.loading = true;
    this.error = null;

    this.mapService.getLocation(query).subscribe({
      next: (locations) => {
        this.locations = locations;
        this.updateMapMarkers()
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load locations';
        this.loading = false;
      }
    });
  }

  searchLocation():void {
    this.fetchLocations(this.searchQuery);
  }

  updateMapMarkers(): void {
    this.mapLayers = this.locations.map(location =>
      L.marker([location.lat, location.lng]).bindPopup(`
        <b>${location.name}</b><br>
        <a href="${location.googleMapsUrl}" target="_blank">Google Maps</a><br>
        <a href="${location.openStreetMapsUrl}" target="_blank">OpenStreetMap</a>
      `)
    );

    if(this.locations.length > 0){
      const firstLocation = this.locations[0];
      this.centerMap(firstLocation.lat, firstLocation.lng);
    }
  }
}
