import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { MapViewComponent } from './pages/map-view/map-view.component';
import {FormsModule} from '@angular/forms';
import {NgxLeafletModule} from 'ngx-leaflet';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';


@NgModule({
  declarations: [
    MapComponent,
    MapViewComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    FormsModule,
    LeafletModule
  ],
  exports: [MapComponent]
})
export class MapModule { }
