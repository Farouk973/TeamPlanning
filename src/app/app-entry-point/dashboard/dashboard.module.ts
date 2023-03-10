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
import { StepperComponent } from './chiffrage/stepper/stepper.component';
import { FormlyModule } from '@ngx-formly/core';
@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    GenericStepperComponent,
    StepperComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatStepperModule
 ]
})
export class DashboardModule { }
