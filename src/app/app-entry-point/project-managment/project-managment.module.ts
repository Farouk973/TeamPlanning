import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StepperProjectComponent} from "./stepper-project/stepper-project.component";
import {StepperModule} from "../../../shared/generic/stepper/stepper.module";
import {ProjectManagmentRoutingModule} from "./project-managment-routing.module";



@NgModule({
  declarations: [
    StepperProjectComponent
  ],
  imports: [
    CommonModule,
    StepperModule,
    ProjectManagmentRoutingModule
  ]

})
export class ProjectManagmentModule { }
