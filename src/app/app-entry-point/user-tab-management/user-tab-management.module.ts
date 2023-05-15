import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTabComponent } from './user-tab/user-tab.component';
import { UserTabManagementRoutingModule } from './user-tab-management-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import { AddSkillDialogComponent } from './add-skill-dialog/add-skill-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ChipsPopUpGCModule } from 'src/shared/generic/chips-pop-up-gc/chips-pop-up-gc.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CardViewModule } from 'src/shared/generic/card-view/card-view.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserTabComponent,
    AddSkillDialogComponent
  ],
  imports: [
    CommonModule,
    UserTabManagementRoutingModule,
    MatTabsModule,
    MatDialogModule,
    ChipsPopUpGCModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatPaginatorModule,
    CardViewModule
  ],
  exports: [
    UserTabComponent,
  ]
})
export class UserTabManagementModule { }
