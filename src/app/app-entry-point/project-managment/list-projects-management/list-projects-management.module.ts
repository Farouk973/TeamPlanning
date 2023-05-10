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
import { AssignProjectUserComponent } from './assign-project-user/assign-project-user.component';
import {AutoCompleteModule} from "../../../../shared/generic/auto-complete/auto-complete.module";
import { AssignUnaasignProjectComponent } from './assign-unaasign-project/assign-unaasign-project.component';

@NgModule({
  declarations: [
    ListProjectsComponent,
    DetailsProjectComponent,
    AssignProjectUserComponent,
    AssignUnaasignProjectComponent
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
        CardViewModule,
        AutoCompleteModule

    ]
})
export class ListProjectsManagementModule { }
