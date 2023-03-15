import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormComponent} from "../../../../../shared/generic/form/form/form.component";

interface JsonFormStep {
  title: string;
  order: string;
  "content": "https://localhost:44312/meta/CreatePermissionCommand"
  action :
   [
     {
      label: string,
    }
    ]
}

export interface JsonFormData {
  steps: JsonFormStep[];

}
export interface Config {
  formdata?:string;
}
@Component({
  selector: 'app-generic-stepper',
  templateUrl: './generic-stepper.component.html',
  styleUrls: ['./generic-stepper.component.css']
})

export class GenericStepperComponent implements OnInit {
 @Input() stepperData!:JsonFormData;
  @ViewChild(FormComponent) childComponent: FormComponent;
  formdata: 'https://localhost:44312/meta/CreatePermissionCommand';
  constructor() { }

  ngOnInit(): void {
    console.log(this.childComponent)
  }
  onNoClick(): void {
  }

}
