import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Stepper} from "../../../../shared/generic/models/stepper.model";
import {Observable} from "rxjs";
import {FormComponent} from "../../../../shared/generic/form/form/form.component";
import {RolesComponent} from "../roles-management/roles/roles.component";
import {FeatureComponent} from "../feature-managment/feature/feature.component";
import {SkillStepperComponent} from "../../skill-stepper-management/skill-stepper/skill-stepper.component";
import {RecopProjectComponent} from "../recop-project/recop-project.component";
@Component({
  selector: 'app-stepper-project',
  templateUrl: './stepper-project.component.html',
  styleUrls: ['./stepper-project.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class StepperProjectComponent implements OnInit {
  public stepper$ : Observable<Stepper> ;

  chiff : boolean;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.stepper$=this.http.get<Stepper>('/assets/stepper.json');
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
}
