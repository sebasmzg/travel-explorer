import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import {UserProfileComponent} from './pages/user-profile/user-profile.component';
import {UserSettingsComponent} from './pages/user-settings/user-settings.component';

const routes: Routes = [
  { path: '', component: UserProfileComponent },
  { path: ':id', component: UserSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
