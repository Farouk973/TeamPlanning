import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridViewComponent } from './grid-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ActionPanelModule } from '../action-panel/action-panel.module';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [GridViewComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    ActionPanelModule,
    MatPaginatorModule,
    MatMenuModule
  ],
  exports: [GridViewComponent],
})
export class GridViewModule {}
