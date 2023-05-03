import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlanningProjectComponent} from "./planning-project/planning-project.component";


const routes: Routes = [
  { path : '' , component : PlanningProjectComponent,children:[
      { path : ':id' , component : PlanningProjectComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningManagementRoutingModule { }
