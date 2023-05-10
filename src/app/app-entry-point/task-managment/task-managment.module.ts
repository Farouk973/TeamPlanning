import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskManagmentRoutingModule } from './task-managment-routing.module';
import { TaskComponent } from './task/task.component';
import {GenericTableModule} from "../../../shared/generic/generic-table/generic-table.module";
import {GridViewModule} from "../../../shared/generic/grid-view/grid-view.module";
import { RequestComponent } from './request/request.component';



@NgModule({
  declarations: [
    TaskComponent,
    RequestComponent,
  ],
  imports: [
    CommonModule,
    TaskManagmentRoutingModule,
    GenericTableModule,
    GridViewModule,

  ]
})
export class TaskManagmentModule { }
