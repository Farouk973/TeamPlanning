import {
  Component,
  Input,
  OnInit, ViewChild,

} from '@angular/core';
import {FormComponent} from "../../form/form/form.component";
import {Stepper} from "../../models/stepper.model";
import {Observable,} from "rxjs";
import {FeatureComponent} from "../../../../app/app-entry-point/project-managment/feature-managment/feature/feature.component";
import {RolesComponent} from "../../../../app/app-entry-point/project-managment/roles-management/roles/roles.component";
import {RecopProjectComponent} from "../../../../app/app-entry-point/project-managment/recop-project/recop-project.component";
import {IoEventContextToken} from "ng-dynamic-component";
import {GenericStepperService} from "../generic.stepper.service";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {SkillStepperComponent } from 'src/app/app-entry-point/skill-stepper-management/skill-stepper/skill-stepper.component';
import {MatDialog} from "@angular/material/dialog";
import {MatStepper} from "@angular/material/stepper";



// @ts-ignore
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

export class GenericStepperComponent<T> implements OnInit {
  @Input() stepper$!: Stepper;
  @Input() getComponent: (contentType: string) => any;
  stepper = new Stepper();
  actionType: string;
  order : number;
  idResponse : string ='';
  chiff: boolean = false
  @ViewChild(MatStepper) st!: MatStepper;
  next : boolean;
  //formIsValid : any;
  constructor(public http: HttpClient, private genericStepperService : GenericStepperService , private location : Location , private router : Router , public dialog: MatDialog) {

  }

  ngOnInit(): void {
      this.stepper = this.stepper$;

  }

  getComponentByContentType(contentType: string): any {
    return this.getComponent(contentType);
  }


  formResponse(event) {
    this.idResponse= event.response.id
    const url = this.location.path().split('?')[0] + '/' + event.response.id;
    this.location.replaceState(url);
    if(event.response.id){
      this.st.next();
    }
  }
  formIsValid(valid : boolean){
    if(!valid){
      window.location.reload()
    }

  }


  onFormSubmit(step : number ): void {
   if (step == 1) {
     this.actionType = 'CREATE'
     this.order= 1
    }
    if (step == 2) {
     this.order= 2
      this.st.next();
    }

    if (step == 3) {
      this.order= 3
      this.st.next();
    }
    if (step == 4) {
      this.order= 4
      this.st.next();
    }
    if (step == 5) {
      this.order= 5
      this.st.next();
    }

  }

  deleteItem(){
    const url = this.location.path();
    let id = url.substring(url.lastIndexOf('/') + 1);
    this.genericStepperService.deleteItem(this.stepper.delete.endpoint, id ).subscribe((response)=>{
      console.log(response)
      this.router.navigate(['/projects/list-projects']);
    })
  }

  validateItem() {
    this.chiff = true
    this.router.navigate(['/costing/cost-project/', this.idResponse])

  }
}
