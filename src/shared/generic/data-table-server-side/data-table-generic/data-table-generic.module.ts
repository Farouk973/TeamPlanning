import { NgModule } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DataTableGenericComponent } from './data-table-generic.component';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';

import { CustomCellComponent } from './custom-cell/custom-cell.component';



@NgModule({
  declarations: [
    DataTableGenericComponent,
    CustomCellComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    NgComponentOutlet
  ],

  exports:[
    DataTableGenericComponent
  ]
})
export class DataTableGenericModule { }
