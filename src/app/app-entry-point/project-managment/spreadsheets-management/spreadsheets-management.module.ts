import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpreadsheetsManagementRoutingModule } from './spreadsheets-management-routing.module';
import { SpreadsheetsProjectComponent } from './spreadsheets-project/spreadsheets-project.component';
import {SpreadsheetsModule} from "../../../../shared/generic/spreadsheets/spreadsheets.module";
import {FeatureManagmentModule} from "../feature-managment/feature-managment.module";




@NgModule({
  declarations: [
    SpreadsheetsProjectComponent,
  ],
    imports: [
        CommonModule,
        SpreadsheetsManagementRoutingModule,
        SpreadsheetsModule,
        FeatureManagmentModule,

    ],
  exports: [
    SpreadsheetsProjectComponent
  ]
})
export class SpreadsheetsManagementModule { }
