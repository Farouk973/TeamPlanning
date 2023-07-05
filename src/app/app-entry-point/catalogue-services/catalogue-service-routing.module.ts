import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogueServicesComponent} from './catalogue-services/catalogue-services.component'
import { ListServiceComponent } from './catalogue-services/list-service/list-service.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogueServicesComponent,
  },
  {
    path: 'list',
    component: ListServiceComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueServicesRoutingModule { }
