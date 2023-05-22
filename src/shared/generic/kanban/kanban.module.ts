import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanComponent } from './kanban/kanban.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CardsComponent } from './cards/cards.component';
import { KanbanItemsComponent } from './kanban-items/kanban-items.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    KanbanComponent,
    CardsComponent,
    KanbanItemsComponent,
  
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule
  ],
  exports:[
    KanbanComponent,
    CardsComponent,
    KanbanItemsComponent
  
  ]
})
export class KanbanModule { }
