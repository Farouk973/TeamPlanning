import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import {MatMenuModule} from '@angular/material/menu';
import {GenericTableComponent} from './generic-table.component'
import { DynamicComponent, DynamicIoDirective } from 'ng-dynamic-component';

@NgModule({
  declarations: [GenericTableComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    DynamicComponent,
    DynamicIoDirective,
 
    MatMenuModule],
  exports: [GenericTableComponent]
})
export class GenericTableModule { }
