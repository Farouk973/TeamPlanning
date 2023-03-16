import {Component, Input, OnInit, Type, ViewChild} from '@angular/core';
import {FormComponent} from "../../form/form/form.component";
import {Stepper} from "../../models/stepper.model";


@Component({
  selector: 'app-generic-stepper',
  templateUrl: './generic-stepper.component.html',
  styleUrls: ['./generic-stepper.component.css']
})

export class GenericStepperComponent implements OnInit {
 @Input() stepperData!:Stepper;
  public metaData: string = 'https://localhost:44312/meta/UploadPictureCommand';
  @ViewChild(FormComponent) childComponent: FormComponent;
  constructor() { }

  ngOnInit(): void {
  // this.x.steps[0].comp[0] = FormComponent
  }
  onNoClick(): void {
  }

  getComponent(componentName: string): Type<any> {
    switch (componentName) {
      case 'Step1Component':
        return FormComponent;
      default:
        throw new Error(`Invalid component name: ${componentName}`);
    }
  }
  public getEndpoint(): string {
    return this.metaData;
  }
}
