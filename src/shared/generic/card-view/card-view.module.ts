import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViewComponent } from './card-view/card-view.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActionPanelModule } from '../action-panel/action-panel.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    CardViewComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    ActionPanelModule,
    MatPaginatorModule,
    MatMenuModule,
    MatCardModule
  ],
  exports: [CardViewComponent],

})
export class CardViewModule { }
