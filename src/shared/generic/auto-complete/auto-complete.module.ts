import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicAutoCompleteComponent } from './dynamic-auto-complete/dynamic-auto-complete.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    DynamicAutoCompleteComponent
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports : [
    DynamicAutoCompleteComponent
  ]
})
export class AutoCompleteModule { }
