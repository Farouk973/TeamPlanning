import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesManagementRoutingModule } from './roles-management-routing.module';
import { RolesComponent } from './roles/roles.component';
import {AutoCompleteModule} from "../../../shared/generic/auto-complete/auto-complete.module";


@NgModule({
  declarations: [
    RolesComponent
  ],
  imports: [
    CommonModule,
    RolesManagementRoutingModule,
    AutoCompleteModule
  ]
})
export class RolesManagementModule { }
