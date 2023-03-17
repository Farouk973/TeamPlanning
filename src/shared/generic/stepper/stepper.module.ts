import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {GenericStepperComponent} from "./generic-stepper-form/generic-stepper.component";
import {MatStepperModule} from "@angular/material/stepper";
import {FormModule} from "../form/form.module";
import { DynamicIoModule } from 'ng-dynamic-component';
@NgModule({
  declarations: [
    GenericStepperComponent
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    FormModule,
    DynamicIoModule
  ],
  exports:[
    GenericStepperComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA, // <--- Ajouter NO_ERRORS_SCHEMA à la liste des schémas
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class StepperModule { }
