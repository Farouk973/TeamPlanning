import {Component, Input, OnInit} from '@angular/core';


interface JsonFormControls {
  label: string;
  ordre: string;

}
export interface JsonFormData {
  steps: JsonFormControls[];
}
@Component({
  selector: 'app-generic-stepper',
  templateUrl: './generic-stepper.component.html',
  styleUrls: ['./generic-stepper.component.css']
})

export class GenericStepperComponent implements OnInit {
 @Input() stepperData!:JsonFormData;
  constructor() { }

  ngOnInit(): void {

  }

}
