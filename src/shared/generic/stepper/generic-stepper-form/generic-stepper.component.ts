import {Component, Input, OnInit, Type,} from '@angular/core';
import {FormComponent} from "../../form/form/form.component";
import {Stepper} from "../../models/stepper.model";
import {Observable} from "rxjs";
import {FeatureComponent} from "../../../../app/app-entry-point/feature-managment/feature/feature.component";
import {RolesComponent} from "../../../../app/app-entry-point/roles-management/roles/roles.component";


@Component({
  selector: 'app-generic-stepper',
  templateUrl: './generic-stepper.component.html',
  styleUrls: ['./generic-stepper.component.css']
})

export class GenericStepperComponent implements OnInit {
 @Input() stepper$!:Observable<Stepper>;
  stepper = new Stepper();
  ngOnInit(): void {
    this.stepper$.subscribe((stepperData:any ) => {

      this.stepper= stepperData;
/*      this.http
        .get('/assets/stepper.json').
        .subscribe((formData:any ) => {
          formData.steps.forEach(step =>{
            let _step = new Step();
            _step.title = step.title;
            _step.order =step.order;
            _step.action= step.action;
            _step.content = new Form();
            this.stepper.steps.push(_step);
          })
        });*/
      });
  }

  getComponent(contentType: string): Type<any> {
    switch (contentType) {
      case 'Form':
        return FormComponent;
      case 'Features':
        return FeatureComponent;
      case 'Roles':
        return RolesComponent;
      default:
        throw new Error(`Invalid component name: ${contentType}`);
    }
  }
}
