import { Component, OnInit , Inject,Injector, Type ,ReflectiveInjector, InjectionToken} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { Actionpanel } from '../../models/ActionPanel.model';
import { GridView } from '../../models/GridView.model';
import { ItemComponent } from 'src/app/app-entry-point/access-managment/permissions/item/item.component';
export const ID = new InjectionToken<string>('id', { providedIn: 'root',  factory: () => 'id' } ); 
@Component({
  selector: 'app-actiondialog',
  templateUrl: './actiondialog.component.html',
  styleUrls: ['./actiondialog.component.css']
})
export class ActiondialogComponent implements OnInit {
  dynamicComponentInjector: Injector;
  set dynamicComponentInputTitle(title) {
    this.dynamicComponentInjector = ReflectiveInjector.resolveAndCreate([{ provide: ID, useValue: this.data.id }], this.parentInjector);
  }
  constructor(private parentInjector: Injector,
    public dialogRef: MatDialogRef<ActiondialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {   this.dynamicComponentInputTitle = data.id;}

  compoment: Type<any> = this.data.data;

  ngOnInit(): void {
  }


}
