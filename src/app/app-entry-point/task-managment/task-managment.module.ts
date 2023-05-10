import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskManagmentRoutingModule } from './task-managment-routing.module';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    TaskManagmentRoutingModule
  ]
})
export class TaskManagmentModule { }
