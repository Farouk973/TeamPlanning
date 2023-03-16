import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {GenericStepperComponent} from "./generic-stepper-form/generic-stepper.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatStepperModule} from "@angular/material/stepper";
import {FormModule} from "../form/form.module";
import {NXMDialogModule} from "../nxm-dialog/nxm-dialog.module";
import {GridViewModule} from "../grid-view/grid-view.module";
import {NXMGContainerModule} from "../nxm-g-container/nxm-g-container.module";
import {DialogStepperModule} from "../card-stepper/dialog-stepper.module";



@NgModule({
  declarations: [
    GenericStepperComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatStepperModule,
    FormModule,
    NXMDialogModule,
    GridViewModule,
    NXMGContainerModule,
    DialogStepperModule
  ],
  exports:[
    GenericStepperComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA // <--- Ajouter NO_ERRORS_SCHEMA à la liste des schémas
  ]
})
export class StepperModule { }
