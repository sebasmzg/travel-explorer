import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'destinations', loadChildren: () => import('./features/destinations/destinations.module').then(m => m.DestinationsModule) },
  { path: 'activities', loadChildren: () => import('./features/activities/activities.module').then(m => m.ActivitiesModule) },
  { path: 'map', loadChildren: () => import('./features/map/map.module').then(m => m.MapModule) },
  { path: 'user', loadChildren: () => import('./features/user/user.module').then(m => m.UserModule) },
  { path: '**', redirectTo: 'destinations'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
