import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngagementManagmentRoutingModule } from './engagement-managment-routing.module';
import { EngagmentsComponent } from './engagments/engagments.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { GridViewModule } from 'src/shared/generic/grid-view/grid-view.module';
import { PhasesComponent } from './phases/phases.component';


@NgModule({
  declarations: [
    EngagmentsComponent,
    PhasesComponent,
  ],
  imports: [
    CommonModule,
    EngagementManagmentRoutingModule,
    MatIconModule,
    MatDialogModule,
    GridViewModule
  ]
})
export class EngagementManagmentModule { }
