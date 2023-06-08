import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConflictManagementComponent } from './conflict-management/conflict-management.component';
import { ConflictManagementRoutingModule } from './conflict-management-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { GenericTableModule } from 'src/shared/generic/generic-table/generic-table.module';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { SolveConflictComponent } from './solve-conflict/solve-conflict.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ConflictTimelineComponent } from './conflict-timeline/conflict-timeline.component';
import { CalendarModule } from 'src/shared/generic/calendar/calendar.module';



@NgModule({
  declarations: [
    ConflictManagementComponent,
    ViewDetailsComponent,
    SolveConflictComponent,
    ConflictTimelineComponent
  ],
  imports: [
    CommonModule,
    ConflictManagementRoutingModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    DragDropModule,
    GenericTableModule,
    MatFormFieldModule,
    CalendarModule
  ]
})
export class ConflictManagementModule { }
