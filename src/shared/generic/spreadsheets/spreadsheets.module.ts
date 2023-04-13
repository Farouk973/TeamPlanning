import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpreadsheetsComponent } from './spreadsheets/spreadsheets.component';
import {MatTableModule} from "@angular/material/table";
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {CdkAccordionModule} from "@angular/cdk/accordion";




@NgModule({
  declarations: [
    SpreadsheetsComponent
  ],
  exports: [
    SpreadsheetsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,

  ]
})
export class SpreadsheetsModule { }
