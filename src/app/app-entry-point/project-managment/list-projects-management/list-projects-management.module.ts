import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProjectsManagementRoutingModule } from './list-projects-management-routing.module';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import {ListCardModule} from "../../../../shared/generic/list-card/list-card.module";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import { FlexLayoutModule } from '@angular/flex-layout';
import { DetailsProjectComponent } from './details-project/details-project.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatChipsModule} from "@angular/material/chips";
import {FormsModule} from "@angular/forms";
import { CardViewModule } from 'src/shared/generic/card-view/card-view.module';

@NgModule({
  declarations: [
    ListProjectsComponent,
    DetailsProjectComponent
  ],
  imports: [
    CommonModule,
    ListProjectsManagementRoutingModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    MatDialogModule,
    MatChipsModule,
    FormsModule,
    CardViewModule

  ]
})
export class ListProjectsManagementModule { }
