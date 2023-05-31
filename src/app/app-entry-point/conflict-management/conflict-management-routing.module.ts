import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { ConflictManagementComponent } from "./conflict-management/conflict-management.component";


const routes: Routes = [
    
    {
      path: '',
      component:ConflictManagementComponent ,
    },
    
  
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ConflictManagementRoutingModule{}