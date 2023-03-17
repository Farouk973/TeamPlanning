import {Component, Input, OnInit, Type,} from '@angular/core';
import {FormComponent} from "../../form/form/form.component";
import {Stepper} from "../../models/stepper.model";


@Component({
  selector: 'app-generic-stepper',
  templateUrl: './generic-stepper.component.html',
  styleUrls: ['./generic-stepper.component.css']
})

export class GenericStepperComponent implements OnInit {
 @Input() stepperData!:Stepper;
  constructor( ) { }

  ngOnInit(): void {
  }

  getComponent(componentName: string): Type<any> {
    switch (componentName) {
      case 'Step1Component':
        return FormComponent;
      default:
        throw new Error(`Invalid component name: ${componentName}`);
    }
  }
}
