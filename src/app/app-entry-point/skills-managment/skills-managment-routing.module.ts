import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { SkillsManagementComponent } from './skills-management/skills-management.component';

const routes: Routes = [
  {
    path: '',
    component: SkillsManagementComponent,
  },
  {
    path: 'skillmanagement',
    component: SkillsComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsManagmentRoutingModule { }
