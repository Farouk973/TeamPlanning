import {
  Component,
  Input,
  OnInit,

} from '@angular/core';
import {FormComponent} from "../../form/form/form.component";
import {Stepper} from "../../models/stepper.model";
import { Observable,} from "rxjs";
import {FeatureComponent} from "../../../../app/app-entry-point/feature-managment/feature/feature.component";
import {RolesComponent} from "../../../../app/app-entry-point/roles-management/roles/roles.component";
import {RecopProjectComponent} from "../../../../app/app-entry-point/project-managment/recop-project/recop-project.component";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {IoEventContextToken} from "ng-dynamic-component";
import {GenericStepperService} from "../generic.stepper.service";
import {Location} from "@angular/common";
import {Router} from "@angular/router";


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
  order : number;
  idResponse : string ='';
  constructor(public http: HttpClient, private genericStepperService : GenericStepperService , private location : Location , private router : Router) {

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
      case 'Recap':
        return RecopProjectComponent;
      default:
        throw new Error(`Invalid component name: ${contentType}`);
    }
  }


  formResponse(event) {
    this.idResponse= event.response.projectId
    const url = this.location.path().split('?')[0] + '/' + event.response.projectId;
    this.location.replaceState(url);
  }


  onFormSubmit(step : number ): void {

    if (step == 1) {
      this.actionType = '';
      this.actionType = 'CREATE'
      this.order= 1
    }
    if (step == 2) {
     this.order= 2
    }

    if (step == 3) {
      this.order= 3

    }
  }

  deleteItem(){
    this.genericStepperService.deleteItem(this.stepper.delete.endpoint, this.idResponse ).subscribe((response)=>{
      console.log(response)
    })
    this.router.navigate(['/']);
  }
  validateItem() {
    this.router.navigate(['/']);
  }
}
