import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NXMContainerComponent } from './nxmcontainer/nxmcontainer.component';
import { GridViewModule } from "../grid-view/grid-view.module";
import { FormModule } from '../form/form.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { NXMDialogModule } from '../nxm-dialog/nxm-dialog.module';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ContInfoModule } from '../cont-info/cont-info.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [
        NXMContainerComponent
    ],
    imports: [
        CommonModule,
        FormModule,
        MatIconModule,
        MatButtonModule,
        MatPaginatorModule,
        MatInputModule,
        GridViewModule,
        NXMDialogModule,
        MatDialogModule,
        ContInfoModule,
        MatToolbarModule,
        MatTooltipModule,
        
    ],
    exports: [NXMContainerComponent],
})
export class NXMGContainerModule { }
