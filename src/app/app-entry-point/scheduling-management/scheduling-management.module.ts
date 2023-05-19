import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulingManagementComponent } from './scheduling-management/scheduling-management.component';
import { SchedulingManagementRoutingModule } from './scheduling-management-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SchedulingPlanningManagementComponent } from './scheduling-planning-management/scheduling-planning-management.component';
import { GenericTableModule } from 'src/shared/generic/generic-table/generic-table.module';
import { GridViewModule } from 'src/shared/generic/grid-view/grid-view.module';
import { MatTableModule } from '@angular/material/table';
import { ViewResourcesComponent } from './view-resources/view-resources.component';



@NgModule({
  declarations: [
    SchedulingManagementComponent,
    SchedulingPlanningManagementComponent,
    ViewResourcesComponent,
  ],
  imports: [
    CommonModule,
    SchedulingManagementRoutingModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    DragDropModule,
    GenericTableModule,MatTableModule,GridViewModule
  ]
})
export class SchedulingManagementModule { }
