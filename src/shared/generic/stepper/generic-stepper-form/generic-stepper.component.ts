import {Component, Input, OnInit, Type,} from '@angular/core';
import {FormComponent} from "../../form/form/form.component";
import {Stepper} from "../../models/stepper.model";
import {GridViewComponent} from "../../grid-view/grid-view.component";


@Component({
  selector: 'app-generic-stepper',
  templateUrl: './generic-stepper.component.html',
  styleUrls: ['./generic-stepper.component.css']
})

export class GenericStepperComponent implements OnInit {
 @Input() stepperData!:Stepper;
  inputs = { metaData :'https://localhost:44312/meta/CreatePermissionCommand'};
  constructor( ) { }

  ngOnInit(): void {
  }

  getComponent(componentName: string): Type<any> {
    switch (componentName) {
      case 'NXMForm':
        return FormComponent;
      case 'NXMGridView':
        return GridViewComponent;
      default:
        throw new Error(`Invalid component name: ${componentName}`);
    }
  }
}
