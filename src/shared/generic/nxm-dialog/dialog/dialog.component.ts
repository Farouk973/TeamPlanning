import { Component, Inject, Input, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormComponent } from '../../form/form/form.component';
import { Form } from '../../models/Form.model';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  @ViewChild(FormComponent) childComponent: FormComponent;
  afterSubmitValue : any ;
  ngOnInit(): void {
    console.log("thusdata",this.data)
    this.map.set("Role","title")
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onFormSubmit(): void {
    this.childComponent.submitForm();
  }
  afterSubmitResponse(returnedValue: any) {

    this.afterSubmitValue = returnedValue;
  }

  map : Map<string,string> = new Map([
    ["role", "title"],
]);

  
  forms: Form = {
    endpoint: this.data.endpoint,
    Object: this.data.object,
    metaData: this.data.metaData,
    title: this.data.title,
    Options : this.map
   };
}

