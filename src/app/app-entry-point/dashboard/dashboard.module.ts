import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,
    ButtonModule,
    FileUploadModule
  ]
})
export class DashboardModule { }
