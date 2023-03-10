import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {GenericStepperComponent} from "./chiffrage/generic-stepper-form/generic-stepper.component";
import {StepperComponent} from "./chiffrage/stepper/stepper.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'stepper',
    component: StepperComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
