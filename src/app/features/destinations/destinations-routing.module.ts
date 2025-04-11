import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationsComponent } from './destinations.component';
import {DestinationListComponent} from './pages/destination-list/destination-list.component';
import {DestinationDetailComponent} from './pages/destination-detail/destination-detail.component';

const routes: Routes = [
  { path: '', component: DestinationListComponent },
  { path: ':id', component: DestinationDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationsRoutingModule { }
