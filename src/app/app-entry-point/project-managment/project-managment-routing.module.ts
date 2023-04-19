import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StepperProjectComponent} from "./stepper-project/stepper-project.component";


const routes: Routes = [
  {
    path: 'project',
    component: StepperProjectComponent, children:[
      {path: ':id', component :StepperProjectComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagmentRoutingModule { }
