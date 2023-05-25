import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestCalanderComponent } from './request-calander/request-calander.component';
import { TaskKanbanComponent } from './task-kanban/task-kanban.component';
import { TaskCalanderComponent } from './task-calander/task-calander.component';
import { AddRequestComponent } from './add-request/add-request.component';
import { ScheduligTasksComponent } from './schedulig-tasks/schedulig-tasks.component';

const routes: Routes = [
  {
    path: 'calander',
    component: RequestCalanderComponent,
  },
  {
    path: 'task-kanban',
    component: TaskKanbanComponent,
  },
  {
    path: 'task-calandar/:id',
    component: TaskCalanderComponent,
  },
  {
    path: 'add',
    component: AddRequestComponent,
  },
  {
    path: 'schedulig/:id',
    component: ScheduligTasksComponent,
  },


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestManagmentRoutingModule { }
