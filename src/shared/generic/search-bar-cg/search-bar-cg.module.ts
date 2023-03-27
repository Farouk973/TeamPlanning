import { NgModule } from '@angular/core';
import { SearchBarCgComponent } from './search-bar-cg/search-bar-cg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    SearchBarCgComponent
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatAutocompleteModule,
    CommonModule,
  ],
  exports:[
    SearchBarCgComponent
   ]
})
export class SearchBarCGModule { }
