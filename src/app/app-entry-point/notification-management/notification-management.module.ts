import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationManagementRoutingModule } from './notification-management-routing.module';
import { NotificationComponent } from './notification/notification.component';
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import {NotificationService} from "../../../shared/services/notification.service";
//import {WrappedSocket} from "ngx-socket-io/src/socket-io.service";
const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };

@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
    NotificationManagementRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    NotificationService,

  ],
})
export class NotificationManagementModule { }
