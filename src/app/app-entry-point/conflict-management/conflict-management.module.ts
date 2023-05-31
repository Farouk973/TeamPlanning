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



@NgModule({
  declarations: [
    ConflictManagementComponent,
    ViewDetailsComponent,
    SolveConflictComponent
  ],
  imports: [
    CommonModule,
    ConflictManagementRoutingModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    DragDropModule,
    GenericTableModule,
    MatFormFieldModule
  ]
})
export class ConflictManagementModule { }
