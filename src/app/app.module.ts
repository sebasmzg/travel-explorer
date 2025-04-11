import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core.module';
import { SharedModule } from './shared.module';
import { HttpClientModule} from '@angular/common/http';
import {DestinationService} from './features/destinations/services/destination.service';
import {MapService} from './features/map/services/map.service';
import {NgxLeafletModule} from 'ngx-leaflet';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    LeafletModule
  ],
  providers: [
    DestinationService,
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
