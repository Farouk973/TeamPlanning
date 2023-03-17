import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import {FormModule} from "../../../shared/generic/form/form.module";
import {NXMDialogModule} from "../../../shared/generic/nxm-dialog/nxm-dialog.module";
import {GridViewModule} from "../../../shared/generic/grid-view/grid-view.module";
import {NXMGContainerModule} from "../../../shared/generic/nxm-g-container/nxm-g-container.module";



@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
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
    GridViewModule,
    NXMGContainerModule,
    
 ]
})
export class DashboardModule { }
