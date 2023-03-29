import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicAutoCompleteComponent } from './dynamic-auto-complete/dynamic-auto-complete.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  declarations: [
    DynamicAutoCompleteComponent,
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatChipsModule,

  ],
  exports : [
    DynamicAutoCompleteComponent
  ]
})
export class AutoCompleteModule { }
