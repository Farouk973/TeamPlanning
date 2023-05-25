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
import { AddRequestComponent } from './add-request/add-request.component';
import { StepperModule } from 'src/shared/generic/stepper/stepper.module';
import { ScheduligTasksComponent } from './schedulig-tasks/schedulig-tasks.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { ActionPanelModule } from 'src/shared/generic/action-panel/action-panel.module';


@NgModule({
  declarations: [
    RequestCalanderComponent,
    TaskKanbanComponent,
    TaskCalanderComponent,
    AddRequestComponent,
    ScheduligTasksComponent 
  ],
  imports: [
    CommonModule,
    RequestManagmentRoutingModule,
    CalendarModule,
    MatIconModule,
    MatCardModule,
    KanbanModule,
    StepperModule,
    MatGridListModule,
    MatMenuModule,
    ActionPanelModule
  ]
})
export class RequestManagmentModule { }
