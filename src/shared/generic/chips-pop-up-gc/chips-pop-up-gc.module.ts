import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { SkillRatingDialogComponent } from './skill-rating-dialog/skill-rating-dialog.component';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SearchBarCGModule } from '../search-bar-cg/search-bar-cg.module';
import {MatBadgeModule} from '@angular/material/badge';
import { DomainChipsGCComponent } from './domain-chips-gc/domain-chips-gc.component';
import { AddsubdomaindialogComponent } from './addsubdomaindialog/addsubdomaindialog.component';
import { ActionPanelModule } from '../action-panel/action-panel.module';
import { MatMenuModule } from '@angular/material/menu';




@NgModule({
  declarations: [
    SkillRatingDialogComponent,
    DomainChipsGCComponent,
    AddsubdomaindialogComponent
  ],
  imports: [
    FormsModule,
    MatChipsModule,
    MatIconModule,
    MatTreeModule, 
    CommonModule,
    MatIconModule, 
    MatDialogModule ,
    MatInputModule,
    MatAutocompleteModule,
    SearchBarCGModule,
    MatBadgeModule,
    ActionPanelModule,
    MatMenuModule
    
  ],
  exports:[
    SkillRatingDialogComponent,
    DomainChipsGCComponent
   ]
})
export class ChipsPopUpGCModule { }
