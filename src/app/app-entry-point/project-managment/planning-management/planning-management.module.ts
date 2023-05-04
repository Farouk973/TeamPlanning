import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanningManagementRoutingModule } from './planning-management-routing.module';
import { PlanningProjectComponent } from './planning-project/planning-project.component';


@NgModule({
  declarations: [
    PlanningProjectComponent
  ],
  imports: [
    CommonModule,
    PlanningManagementRoutingModule
  ]
})
export class PlanningManagementModule { }
