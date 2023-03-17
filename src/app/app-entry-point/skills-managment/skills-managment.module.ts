import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsManagmentRoutingModule } from './skills-managment-routing.module';
import { SkillsComponent } from './skills/skills.component';
import { ChipsPopUpGCModule } from 'src/shared/generic/chips-pop-up-gc/chips-pop-up-gc.module';


@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule,
    SkillsManagmentRoutingModule,
    ChipsPopUpGCModule
  ]
})
export class SkillsManagmentModule { }
