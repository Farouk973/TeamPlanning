import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormComponent } from 'src/shared/generic/form/form/form.component';
import { Form } from 'src/shared/generic/models/Form.model';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddSkillComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  @ViewChild(FormComponent) childComponent: FormComponent;
  afterSubmitValue : any ;
  ngOnInit(): void {
    console.log("thusdata",this.data)
    this.map.set("category","name")
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
    ["category", "name"],
]);

  
  forms: Form = {
    endpoint: this.data.endpoint,
    
    metaData: this.data.metaData,
    
    Options : this.map
   };

}
