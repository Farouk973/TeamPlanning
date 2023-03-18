import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogueServiceComponent} from './services/catalogue-service.component'

const routes: Routes = [
  {
    path: '',
    component: CatalogueServiceComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueServicesRoutingModule { }
