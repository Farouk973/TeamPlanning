import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../nxm-dialog/dialog/dialog.component';

@Component({
  selector: 'app-action-panel',
  templateUrl: './action-panel.component.html',
  styleUrls: ['./action-panel.component.scss'],
})
export class ActionPanelComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  @Input() endpoint : string= '';
  @Input() formEditData : string ='';
  @Input() objId: any;
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  ngOnInit(): void {
    console.log('object', this.objId);
  }

  onEdit() {
    this.edit.emit(this.objId);
    
  }

  onDelete() {
    this.delete.emit(this.objId.id);
    
  }
  openDialog(metaData: any,isUpdate: boolean,endpoint:any,object= this.objId): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '1067px',
      height: '519px',
      data: {metaData, isUpdate,endpoint,object},
    });
    dialogRef.afterClosed().subscribe(result => {
     }) 

console.log(this.formEditData)    }


}
