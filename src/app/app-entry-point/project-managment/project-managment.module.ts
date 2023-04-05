import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StepperProjectComponent} from "./stepper-project/stepper-project.component";
import {StepperModule} from "../../../shared/generic/stepper/stepper.module";
import {ProjectManagmentRoutingModule} from "./project-managment-routing.module";
import { RecopProjectComponent } from './recop-project/recop-project.component';
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    StepperProjectComponent,
    RecopProjectComponent
  ],
  imports: [
    CommonModule,
    StepperModule,
    ProjectManagmentRoutingModule,
    MatTableModule
  ]

})
export class ProjectManagmentModule { }
