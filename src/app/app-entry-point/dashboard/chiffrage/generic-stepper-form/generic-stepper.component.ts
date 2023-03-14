import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormComponent} from "../../../../../shared/generic/form/form/form.component";
import {FormGroup} from "@angular/forms";


interface JsonFormStep {
  label: string;
  order: string;
  components :
   [
     {
      label: string,
      endpoint: string;
       type: string;
    }
    ]
}
interface JsonFormComponent {
  Label: string;
  endpoint: string;
}
export interface JsonFormData {
  steps: JsonFormStep[];

}
@Component({
  selector: 'app-generic-stepper',
  templateUrl: './generic-stepper.component.html',
  styleUrls: ['./generic-stepper.component.css']
})

export class GenericStepperComponent implements OnInit {
 @Input() stepperData!:JsonFormData;
  @ViewChild(FormComponent) childComponent: FormComponent;
  constructor() { }

  ngOnInit(): void {


  }
  onNoClick(): void {
    this.childComponent.submitForm();
    console.log(this.childComponent.form.value)
  }
}
