import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueServicesComponent } from './catalogue-services.component';
import { MatMenuModule } from '@angular/material/menu';
import { CatalogueServicesRoutingModule } from '../catalogue-service-routing.module';
import { GenericCardModule } from "../../../../shared/generic/generic_card/generic-card.module";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';




@NgModule({
    declarations: [CatalogueServicesComponent],
    imports: [
        CommonModule,
        CatalogueServicesRoutingModule,
        GenericCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        FormsModule,
        
       
    ]
})

export class CatalogueServicesModule { 



}
