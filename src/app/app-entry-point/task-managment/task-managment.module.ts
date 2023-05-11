import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskManagmentRoutingModule } from './task-managment-routing.module';
import { TaskComponent } from './task/task.component';
import {GenericTableModule} from "../../../shared/generic/generic-table/generic-table.module";
import {GridViewModule} from "../../../shared/generic/grid-view/grid-view.module";
import { RequestComponent } from './request/request.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ResourcesAllotedComponent } from './resources-alloted/resources-alloted.component';
import {MatIconModule} from "@angular/material/icon";
import { ResourcesDialogComponent } from './resources-dialog/resources-dialog.component';



@NgModule({
  declarations: [
    TaskComponent,
    RequestComponent,
    ResourcesAllotedComponent,
    ResourcesDialogComponent,
  ],
  imports: [
    CommonModule,
    TaskManagmentRoutingModule,
    GenericTableModule,
    GridViewModule,
    MatDialogModule,
    MatIconModule

  ]
})
export class TaskManagmentModule { }
