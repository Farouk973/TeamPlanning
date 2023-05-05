import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsManagmentRoutingModule } from './skills-managment-routing.module';
import { SkillsComponent } from './skills/skills.component';
import { ChipsPopUpGCModule } from 'src/shared/generic/chips-pop-up-gc/chips-pop-up-gc.module';
import { SearchBarCGModule } from 'src/shared/generic/search-bar-cg/search-bar-cg.module';
import { GridViewModule } from 'src/shared/generic/grid-view/grid-view.module';
import { FormModule } from 'src/shared/generic/form/form.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    SkillsComponent,
    AddSkillComponent
  ],
  imports: [
    CommonModule,
    SkillsManagmentRoutingModule,
    ChipsPopUpGCModule,
    SearchBarCGModule,
    GridViewModule,
    FormModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule
    
  ]
})
export class SkillsManagmentModule { }
