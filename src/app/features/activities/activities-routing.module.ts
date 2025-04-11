import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities.component';
import {ActivityListComponent} from './pages/activity-list/activity-list.component';
import {ActivityDetailComponent} from './pages/activity-detail/activity-detail.component';

const routes: Routes = [
  { path: '', component: ActivityListComponent },
  { path: ':id', component: ActivityDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
