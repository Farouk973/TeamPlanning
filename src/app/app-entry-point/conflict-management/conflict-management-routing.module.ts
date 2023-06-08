import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { ConflictManagementComponent } from "./conflict-management/conflict-management.component";
import { ConflictTimelineComponent } from "./conflict-timeline/conflict-timeline.component";


const routes: Routes = [
    
    {
      path: '',
      component:ConflictManagementComponent ,
    },
    {
      path: 'timeline',
      component:ConflictTimelineComponent ,
    },
    
  
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ConflictManagementRoutingModule{}