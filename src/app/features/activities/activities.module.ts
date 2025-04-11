import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './activities.component';
import { ActivityDetailComponent } from './pages/activity-detail/activity-detail.component';
import { ActivityListComponent } from './pages/activity-list/activity-list.component';


@NgModule({
  declarations: [
    ActivitiesComponent,
    ActivityDetailComponent,
    ActivityListComponent
  ],
  imports: [
    CommonModule,
    ActivitiesRoutingModule
  ]
})
export class ActivitiesModule { }
