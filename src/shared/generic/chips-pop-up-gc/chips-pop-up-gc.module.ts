import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsGCComponent } from './chips-gc/chips-gc.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { SkillRatingDialogComponent } from './skill-rating-dialog/skill-rating-dialog.component';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [
    SkillRatingDialogComponent,
    ChipsGCComponent
  ],
  imports: [
    FormsModule,
    MatChipsModule,
    MatIconModule,
    MatTreeModule, 
    MatDialogModule,
    CommonModule,
    MatIconModule, 
    MatDialogModule ,
    MatInputModule,
    
   
    
  ],
  exports:[
    SkillRatingDialogComponent,
    ChipsGCComponent
   ]
})
export class ChipsPopUpGCModule { }
