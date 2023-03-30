import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit, QueryList,
  TemplateRef,
  Type,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {FormComponent} from "../../form/form/form.component";
import {Stepper} from "../../models/stepper.model";
import {Observable} from "rxjs";
import {FeatureComponent} from "../../../../app/app-entry-point/feature-managment/feature/feature.component";
import {RolesComponent} from "../../../../app/app-entry-point/roles-management/roles/roles.component";
import {MatStep, MatStepper} from "@angular/material/stepper";



@Component({
  selector: 'app-generic-stepper',
  templateUrl: './generic-stepper.component.html',
  styleUrls: ['./generic-stepper.component.css']
})

export class GenericStepperComponent implements OnInit , AfterViewInit {
 @Input() stepper$!:Observable<Stepper>;
  stepper = new Stepper();
  @ViewChild(FormComponent) childComponent: FormComponent;
  @ViewChildren('item') items: QueryList<any> ;

  component: any;
  constructor() {
  }

  ngOnInit(): void {
    this.stepper$.subscribe((stepperData:any ) => {
      this.stepper= stepperData;
      });

  }
  ngAfterViewInit(): void {
   // console.log('afterViewInit', this.items)
    //console.log('afterViewInitArrays',this.item.toArray());
    this.items.changes.subscribe(() => {
    this.component= this.items.toArray()[0].elementRef.nativeElement;
      console.log('afterViewInit',this.items.toArray()[0].elementRef);
    });

  }

  reload(){
    window.location.reload()
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
  onFormSubmit(): void {
    this.component.submitForm();
  }
}
