import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsComponent } from './permissions/permissions.component';
import { RoleComponent } from './role/role.component';
import { UserPermessionsComponent } from './user-permessions/user-permessions.component';
import { UsersComponent } from './users/users.component';
import { MenuGuard } from 'src/guards/menu.guard';

const routes: Routes = [
  {
    path: '',
    component: PermissionsComponent,
  },
  {
    path: 'userPermessions',
    component: UserPermessionsComponent,canActivate: [MenuGuard]
  },
  {
    path: 'role',
    component: RoleComponent,canActivate: [MenuGuard]
  }
  ,
  {
    path: 'users',
    component: UsersComponent,canActivate: [MenuGuard]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessManagmentRoutingModule { }
