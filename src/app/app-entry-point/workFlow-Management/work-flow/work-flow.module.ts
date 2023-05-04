import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableGenericModule } from 'src/shared/generic/data-table-server-side/data-table-generic/data-table-generic.module';
import { WorkFlowComponent } from './work-flow.component';
import { WorkFlowRoutingModule } from './work-flow/work-flow-routing.module';
import { GridViewModule } from "src/shared/generic/grid-view/grid-view.module";
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormModule } from 'src/shared/generic/form/form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { EditRequestComponent } from './edit-request/edit-request.component';
import { EditWorkflowComponent } from './edit-workflow/edit-workflow.component';
import { MatMenuModule } from '@angular/material/menu';
import { GenericTableModule } from 'src/shared/generic/generic-table/generic-table.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
    declarations: [WorkFlowComponent, EditRequestComponent,EditWorkflowComponent],
    imports: [
        CommonModule,
        DataTableGenericModule,
        MatAutocompleteModule,
        WorkFlowRoutingModule,
        GridViewModule,
        MatIconModule,
        MatDialogModule,
        FormModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatMenuModule,
        GenericTableModule,
        MatChipsModule


    ]
})
export class WorkFlowModule { }
