import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTabComponent } from './user-tab/user-tab.component';

const routes: Routes = [
  {
    path: '',
    component: UserTabComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTabManagementRoutingModule { }