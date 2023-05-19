import { RouterModule, Routes } from "@angular/router";
import { SchedulingManagementComponent } from "./scheduling-management/scheduling-management.component";
import { NgModule } from "@angular/core";
import { SchedulingPlanningManagementComponent } from "./scheduling-planning-management/scheduling-planning-management.component";

const routes: Routes = [
    {
      path: 'resources',
      component: SchedulingManagementComponent,
    },
    {
      path: '',
      component: SchedulingPlanningManagementComponent,
    },
    
  
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SchedulingManagementRoutingModule{}