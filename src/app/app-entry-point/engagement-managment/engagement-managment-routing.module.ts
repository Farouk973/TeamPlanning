import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngagmentsComponent } from './engagments/engagments.component';
const routes: Routes = [
  {
    path: '',
    component: EngagmentsComponent,
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngagementManagmentRoutingModule { }
