import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureManagmentRoutingModule } from './feature-managment-routing.module';
import { FeatureComponent } from './feature/feature.component';
import {MatSelectModule} from "@angular/material/select";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AutoCompleteModule} from "../../../../shared/generic/auto-complete/auto-complete.module";


@NgModule({
  declarations: [
    FeatureComponent
  ],
    imports: [
        CommonModule,
        FeatureManagmentRoutingModule,
        MatSelectModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
        AutoCompleteModule
    ]
})
export class FeatureManagmentModule { }
