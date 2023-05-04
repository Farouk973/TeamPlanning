import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StepperProjectComponent} from "./stepper-project/stepper-project.component";
import {StepperModule} from "../../../shared/generic/stepper/stepper.module";
import {ProjectManagmentRoutingModule} from "./project-managment-routing.module";
import { RecopProjectComponent } from './recop-project/recop-project.component';
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatChipsModule} from "@angular/material/chips";
import {SpreadsheetsManagementModule} from "./spreadsheets-management/spreadsheets-management.module";




@NgModule({
  declarations: [
    StepperProjectComponent,
    RecopProjectComponent
  ],
    imports: [
        CommonModule,
        StepperModule,
        ProjectManagmentRoutingModule,
        CdkAccordionModule,
        MatExpansionModule,
        MatChipsModule,
        SpreadsheetsManagementModule

    ]

})
export class ProjectManagmentModule { }
