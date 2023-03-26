import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardComponent } from './list-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DynamicModule } from 'ng-dynamic-component';
import { MatMenuModule } from '@angular/material/menu';




@NgModule({
    declarations: [
        ListCardComponent,
     
    ],
    exports: [ListCardComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        DynamicModule,
        MatMenuModule,
      
      
    ]
})
export class ListCardModule { }
