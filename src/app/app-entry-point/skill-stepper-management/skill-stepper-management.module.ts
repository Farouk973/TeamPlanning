import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillStepperComponent } from './skill-stepper/skill-stepper.component';
import { StepperSkillDialogComponent } from './stepper-skill-dialog/stepper-skill-dialog.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { ChipsPopUpGCModule } from 'src/shared/generic/chips-pop-up-gc/chips-pop-up-gc.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    SkillStepperComponent,
    StepperSkillDialogComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatDialogModule,
    ChipsPopUpGCModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatPaginatorModule
  ],
  exports:[SkillStepperComponent]
})
export class SkillStepperManagementModule { }
