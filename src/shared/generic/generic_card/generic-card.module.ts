import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericCardComponent } from './generic-card.component';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { DynamicModule } from 'ng-dynamic-component';

@NgModule({
  declarations: [GenericCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    DynamicModule
    
  ],
  exports: [GenericCardComponent],
})
export class GenericCardModule {}
