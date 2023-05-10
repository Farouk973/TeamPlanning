import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskComponent} from "./task/task.component";
import {RequestComponent} from "./request/request.component";

const routes: Routes = [
  {
    path: 'request', component: RequestComponent
  },
  {
    path: 'task', component: TaskComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskManagmentRoutingModule { }
