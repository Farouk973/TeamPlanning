import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actionpanel } from '../../models/ActionPanel.model';
import { DialogComponent } from '../../nxm-dialog/dialog/dialog.component';
import {ActiondialogComponent} from "../../nxm-dialog/actiondialog/actiondialog.component";


@Component({
  selector: 'app-action-panel',
  templateUrl: './action-panel.component.html',
  styleUrls: ['./action-panel.component.scss'],
})
export class ActionPanelComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  @Input() actionPanel : Actionpanel;
  @Input() objId : any;
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  ngOnInit(): void {
  }

  onEdit() {
    this.edit.emit();

  }

  onDelete() {
    this.delete.emit(this.objId.id);

  }
  openDialog(metaData: any,isUpdate: boolean,endpoint:any,object= this.objId,title=this.actionPanel.title): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '1067px',
      height: '519px',
      data: {metaData, isUpdate,endpoint,object,title},
    });
    dialogRef.afterClosed().subscribe(result => {
      
        this.edit.emit()
    })

console.log(this.actionPanel.formEditData)    }
  openDialogaction(data:any , id : any): void {
    const dialogRef = this.dialog.open(ActiondialogComponent, {
      width: '600px',
      height: '519px',
      data: {data , id},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${Object.keys(result)}`);
    })
  }
openDialogaffecte(metaData: any,isUpdate: boolean,endpoint:any,object= this.objId): void {
  const dialogRef = this.dialog.open(DialogComponent, {
    width: '600px',
    height: '519px',
    data: {metaData, isUpdate,endpoint,object},
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${Object.keys(result)}`);
   })

console.log(this.actionPanel.formEditData)    }

}
