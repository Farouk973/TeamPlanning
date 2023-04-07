import {
  AfterViewInit,
  Component, ContentChild, ContentChildren,
  ElementRef,
  Input, OnChanges,
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
import {RecopProjectComponent} from "../../../../app/app-entry-point/project-managment/recop-project/recop-project.component";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-generic-stepper',
  templateUrl: './generic-stepper.component.html',
  styleUrls: ['./generic-stepper.component.css']
})

export class GenericStepperComponent implements OnInit, AfterViewInit {
  @Input() stepper$!: Observable<Stepper>;
  stepper = new Stepper();
  @ViewChild(FormComponent) childComponent: FormComponent;
  // @ViewChildren('templateRef') items: QueryList<any> ;
  @ViewChildren('stepperComponent') items: QueryList<FormComponent>;
  component: any;
  form = {'metaData': 'https://localhost:44312/meta/CreateRoleCommand', 'endpoint': 'https://localhost:44312/api/Role'}
  actionType : string;
  idItem : string;
  id : string;


  constructor( public http : HttpClient) {
  }

  ngOnInit(): void {
    this.stepper$.subscribe((stepperData: any) => {
      this.stepper = stepperData;
    });

  }
  ngAfterViewInit(): void {

/*    console.log('afterViewInit', this.items.forEach(
      item => {
        console.log(item)
      }
    ))*/
    //console.log('afterViewInitArrays',this.item.toArray());
    /*   this.items.changes.subscribe(() => {
         this.component=  this.items.toArray()[0].elementRef.nativeElement.previousElementSibling;
         console.log('itmes',this.items.toArray()[0].elementRef.nativeElement.previousElementSibling)

       });*/

  }

  reload() {
    window.location.reload()
  }

  getComponent(contentType: string): any {
    switch (contentType) {
      case 'Form':
        return FormComponent;
      case 'Features':
        return FeatureComponent;
      case 'Roles':
        return RolesComponent;
      case 'Recop':
        return RecopProjectComponent;
      default:
        throw new Error(`Invalid component name: ${contentType}`);
    }
  }

  onFormSubmit(): void {
    this.actionType ='';
    this.actionType= 'CREATE';

  }
  formResponse(event) :string{
    console.log('event',event.response.projectId)
    return event.response.projectId;
  }


}
