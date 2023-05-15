import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueServicesComponent } from './catalogue-services.component';
import { MatMenuModule } from '@angular/material/menu';
import { CatalogueServicesRoutingModule } from '../catalogue-service-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchBarModule } from "../../../../shared/generic/search-bar/search-bar.module";
import { ListCardModule } from 'src/shared/generic/list-card/list-card.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DataTableGenericModule } from "src/shared/generic/data-table-server-side/data-table-generic/data-table-generic.module";
import { EditDeleteCatalogueComponent } from './edit-delete-catalogue/edit-delete-catalogue.component';
import { ActionCatalogueComponent } from './action-catalogue/action-catalogue.component';






@NgModule({
    declarations: [CatalogueServicesComponent, EditDeleteCatalogueComponent, ActionCatalogueComponent],
    imports: [
        CommonModule,
        CatalogueServicesRoutingModule,
        ListCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        FormsModule,
        SearchBarModule,
        ReactiveFormsModule,
        MatDialogModule,
        DataTableGenericModule
    ]
})

export class CatalogueServicesModule { 



}
