import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListProjectsComponent} from "./list-projects/list-projects.component";
import {MenuGuard} from "../../../../guards/menu.guard";

const routes: Routes = [
  {
    path :'list-projects', component: ListProjectsComponent,canActivate: [MenuGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListProjectsManagementRoutingModule { }
