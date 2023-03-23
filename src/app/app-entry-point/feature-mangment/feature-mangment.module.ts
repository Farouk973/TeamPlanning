import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureMangmentRoutingModule } from './feature-mangment-routing.module';
import { FeatureComponent } from './feature/feature.component';
import {MatSelectModule} from "@angular/material/select";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AutoCompleteModule} from "../../../shared/generic/auto-complete/auto-complete.module";


@NgModule({
  declarations: [
    FeatureComponent
  ],
    imports: [
        CommonModule,
        FeatureMangmentRoutingModule,
        MatSelectModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
        AutoCompleteModule
    ]
})
export class FeatureMangmentModule { }
