import { NgModule } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { DataTableGenericComponent } from './data-table-generic.component';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';

import { CustomCellComponent } from './custom-cell/custom-cell.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { DynamicComponent, DynamicIoDirective } from 'ng-dynamic-component';
import { CustomStylesDirective } from './custom-styles.directive';




@NgModule({
  declarations: [
    DataTableGenericComponent,
    CustomCellComponent,
    CustomStylesDirective,
  
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    NgComponentOutlet,
    MatSelectModule,
    MatOptionModule,
    DynamicIoDirective,
    DynamicComponent,

    
  ],

  exports:[
    DataTableGenericComponent,
    CustomCellComponent,
    
  ]
})
export class DataTableGenericModule { }
