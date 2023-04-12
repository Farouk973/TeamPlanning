import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpreadsheetsManagementRoutingModule } from './spreadsheets-management-routing.module';
import { SpreadsheetsProjectComponent } from './spreadsheets-project/spreadsheets-project.component';
import {SpreadsheetsModule} from "../../../shared/generic/spreadsheets/spreadsheets.module";




@NgModule({
  declarations: [
    SpreadsheetsProjectComponent,
  ],
  imports: [
    CommonModule,
    SpreadsheetsManagementRoutingModule,
    SpreadsheetsModule,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SpreadsheetsManagementModule { }
