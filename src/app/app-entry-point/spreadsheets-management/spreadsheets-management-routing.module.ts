import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SpreadsheetsProjectComponent} from "./spreadsheets-project/spreadsheets-project.component";

const routes: Routes = [

  {
    path: 'chiff',
    component: SpreadsheetsProjectComponent,children:[
      { path : ':id' , component : SpreadsheetsProjectComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpreadsheetsManagementRoutingModule { }
