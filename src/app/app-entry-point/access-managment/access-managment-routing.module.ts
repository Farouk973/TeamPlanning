import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsComponent } from './permissions/permissions.component';
import { RoleComponent } from './role/role.component';
import { UserPermessionsComponent } from './user-permessions/user-permessions.component';

const routes: Routes = [
  {
    path: '',
    component: PermissionsComponent,
  },
  {
    path: 'userPermessions',
    component: UserPermessionsComponent,
  },
  {
    path: 'role',
    component: RoleComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessManagmentRoutingModule { }
