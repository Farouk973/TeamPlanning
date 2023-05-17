import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestManagmentRoutingModule } from './request-managment-routing.module';
import { RequestCalanderComponent } from './request-calander/request-calander.component';
import { CalendarModule } from 'src/shared/generic/calendar/calendar.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { TaskKanbanComponent } from './task-kanban/task-kanban.component';
import { KanbanModule } from 'src/shared/generic/kanban/kanban.module';
import { TaskCalanderComponent } from './task-calander/task-calander.component';


@NgModule({
  declarations: [
    RequestCalanderComponent,
    TaskKanbanComponent,
    TaskCalanderComponent 
  ],
  imports: [
    CommonModule,
    RequestManagmentRoutingModule,
    CalendarModule,
    MatIconModule,
    MatCardModule,
    KanbanModule
  ]
})
export class RequestManagmentModule { }
