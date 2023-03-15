import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {GenericStepperComponent} from "./chiffrage/generic-stepper-form/generic-stepper.component";
import {StepperProjectComponent} from "./chiffrage/stepper-project/stepper-project.component";



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
    path: 'stepper-project',
    component: StepperProjectComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
