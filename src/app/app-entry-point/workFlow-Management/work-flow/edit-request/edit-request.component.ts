import { Component, OnInit, TemplateRef, ViewChild,ChangeDetectionStrategy, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataTableGenericInput } from 'src/shared/generic/models/dataTable.model';
import { mockDataTableTask } from "../mock-data/data"
@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditRequestComponent implements OnInit {
  @ViewChild('dialogTemplate') dialogTemplate: TemplateRef<any>;
   dataTask:DataTableGenericInput = mockDataTableTask;
   @Input() element?: any;
  @Input() dataSource?:any ;

  @Input() selectedRows?: any[];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    
  }
openDialogue(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';

    this.dialog.open(this.dialogTemplate);
   this.dataTask.readData = this.element.tasksList;
  }
}
