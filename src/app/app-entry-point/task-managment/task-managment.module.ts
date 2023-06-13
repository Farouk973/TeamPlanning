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
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import {NotificationService} from "../../../shared/services/notification.service";
import { RequestManagmentModule } from '../request-managment/request-managment.module';
const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };



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
    MatIconModule,
    MatTableModule,
    MatCardModule,
    FlexLayoutModule,
    MatSnackBarModule,
    SocketIoModule.forRoot(config),
    RequestManagmentModule


  ],
  providers: [
    NotificationService,

  ],
})
export class TaskManagmentModule { }
