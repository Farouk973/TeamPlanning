import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { GenericStepperComponent } from './chiffrage/generic-stepper-form/generic-stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { StepperProjectComponent } from './chiffrage/stepper-project/stepper-project.component';
import {FormModule} from "../../../shared/generic/form/form.module";
import {NXMDialogModule} from "../../../shared/generic/nxm-dialog/nxm-dialog.module";
import {GridViewModule} from "../../../shared/generic/grid-view/grid-view.module";

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    GenericStepperComponent,
    StepperProjectComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatStepperModule,
    FormModule,
    NXMDialogModule,
    GridViewModule
 ]
})
export class DashboardModule { }
