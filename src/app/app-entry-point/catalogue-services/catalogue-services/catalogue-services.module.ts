import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueServicesComponent } from './catalogue-services.component';
import { MatMenuModule } from '@angular/material/menu';
import { CatalogueServicesRoutingModule } from '../catalogue-service-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';

import { SearchBarModule } from "../../../../shared/generic/search-bar/search-bar.module";
import { ListCardModule } from 'src/shared/generic/list-card/list-card.module';




@NgModule({
    declarations: [CatalogueServicesComponent],
    imports: [
        CommonModule,
        CatalogueServicesRoutingModule,
        ListCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        FormsModule,
        SearchBarModule
    ]
})

export class CatalogueServicesModule { 



}
