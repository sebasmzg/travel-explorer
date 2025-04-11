import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationsRoutingModule } from './destinations-routing.module';
import { DestinationsComponent } from './destinations.component';
import { DestinationListComponent } from './pages/destination-list/destination-list.component';
import { DestinationDetailComponent } from './pages/destination-detail/destination-detail.component';


@NgModule({
  declarations: [
    DestinationsComponent,
    DestinationListComponent,
    DestinationDetailComponent
  ],
  imports: [
    CommonModule,
    DestinationsRoutingModule
  ]
})
export class DestinationsModule { }
