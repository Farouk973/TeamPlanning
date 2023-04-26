import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenericStepperComponent} from "./generic-stepper-form/generic-stepper.component";
import {MatStepperModule} from "@angular/material/stepper";
import {FormModule} from "../form/form.module";
import { DynamicIoModule } from 'ng-dynamic-component';
import {RouterModule} from "@angular/router";
import {SpreadsheetsModule} from "../spreadsheets/spreadsheets.module";
import {SpreadsheetsManagementModule} from "../../../app/app-entry-point/spreadsheets-management/spreadsheets-management.module";
import {SkillStepperManagementModule } from 'src/app/app-entry-point/skill-stepper-management/skill-stepper-management.module';
@NgModule({
  declarations: [
    GenericStepperComponent
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    FormModule,
    DynamicIoModule,
    RouterModule,
    SpreadsheetsModule,
    SpreadsheetsManagementModule,
    SkillStepperManagementModule

  ],
  exports:[
    GenericStepperComponent
  ],

})
export class StepperModule { }
