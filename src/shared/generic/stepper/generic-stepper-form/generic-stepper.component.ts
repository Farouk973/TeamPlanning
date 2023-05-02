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
import {IoEventContextToken} from "ng-dynamic-component";
import {GenericStepperService} from "../generic.stepper.service";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {SkillStepperComponent } from 'src/app/app-entry-point/skill-stepper-management/skill-stepper/skill-stepper.component';

import {MatDialog} from "@angular/material/dialog";
import {SpreadsheetsProjectComponent} from "../../../../app/app-entry-point/spreadsheets-management/spreadsheets-project/spreadsheets-project.component";



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
  chiff: boolean = false
  constructor(public http: HttpClient, private genericStepperService : GenericStepperService , private location : Location , private router : Router , public dialog: MatDialog) {

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
      case 'Skills':
        return SkillStepperComponent;
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
    if (step == 4) {
      this.order= 4

    }
    if (step == 4) {
      this.order= 4

    }
  }

  deleteItem(){
    this.genericStepperService.deleteItem(this.stepper.delete.endpoint, this.idResponse ).subscribe((response)=>{
      console.log(response)
      this.router.navigate(['/projects/list-projects']);
    })
//
   
  }

  validateItem() {
    this.chiff = true
    this.router.navigate(['/costing/cost-project/', this.idResponse])
  }
}
