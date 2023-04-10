import {
  AfterViewInit, ChangeDetectorRef,
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
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {FeatureComponent} from "../../../../app/app-entry-point/feature-managment/feature/feature.component";
import {RolesComponent} from "../../../../app/app-entry-point/roles-management/roles/roles.component";
import {RecopProjectComponent} from "../../../../app/app-entry-point/project-managment/recop-project/recop-project.component";
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common";
import {ActivatedRoute, Router, RouterModule, UrlSerializer, UrlTree} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {IoEventContextToken} from "ng-dynamic-component";


@Component({
  selector: 'app-generic-stepper',
  templateUrl: './generic-stepper.component.html',
  styleUrls: ['./generic-stepper.component.css'],
  providers: [
    {
      provide: IoEventContextToken,
      useExisting: GenericStepperComponent,
    },
  ],
})

export class GenericStepperComponent implements OnInit {
  @Input() stepper$!: Observable<Stepper>;
  stepper = new Stepper();

  actionType: string;
  idItem: string;
  idResponse: string = '';


  constructor(public http: HttpClient, private cookieService: CookieService, private location: Location) {

  }

  ngOnInit(): void {
    this.stepper$.subscribe((stepperData: any) => {
      this.stepper = stepperData;
    });
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


  formResponse(event) {
     this.idResponse= event.response.projectId
    this.cookieService.set('idResponse', event.response.projectId);
  }


  onFormSubmit(step : string): void {
    if (step == 'Form') {
      this.actionType = '';
      this.actionType = 'CREATE'

    }
    setTimeout(()=>{
      console.log('onSubmit', this.idResponse)
      if (step == 'Features') {
         this.idResponse=this.idResponse

      }
    },5000)




  }


}
