import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueServiceComponent } from './services/catalogue-service.component';
import { SearchBarModule } from "../../../shared/generic/search-bar/search-bar.module"
import { CardViewModule } from "../../../shared/generic/card-view/card-view.module";
import { CatalogueServicesRoutingModule } from './catalogue-service-routing.module';


@NgModule({
  declarations: [CatalogueServiceComponent],
  imports: [
    CommonModule,
    SearchBarModule,
    CardViewModule,
    CatalogueServicesRoutingModule
  ]
})
export class CatalogueServiceModule { }
