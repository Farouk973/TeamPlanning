import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueServicesComponent } from './catalogue-services.component';

import { CatalogueServicesRoutingModule } from '../catalogue-service-routing.module';


@NgModule({
  declarations: [CatalogueServicesComponent],
  imports: [
    CommonModule,
  
    
    CatalogueServicesRoutingModule
  ]
})
export class CatalogueServicesModule { }
