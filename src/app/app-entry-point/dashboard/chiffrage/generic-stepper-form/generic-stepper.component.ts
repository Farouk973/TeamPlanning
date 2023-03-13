import {Component, Input, OnInit} from '@angular/core';


interface JsonFormStep {
  label: string;
  order: string;

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
  data: any = 'https://localhost:44312/meta/CreatePermissionCommand';
  constructor() { }

  ngOnInit(): void {

  }
}
