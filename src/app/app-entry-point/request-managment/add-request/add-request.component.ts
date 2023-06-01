import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stepper } from 'src/shared/generic/models/stepper.model';
import {FormComponent} from "../../../../shared/generic/form/form/form.component";
import {FeatureComponent} from "../../project-managment/feature-managment/feature/feature.component";
import {RolesComponent} from "../../project-managment/roles-management/roles/roles.component";
import {SkillStepperComponent} from "../../skill-stepper-management/skill-stepper/skill-stepper.component";
import {RecopProjectComponent} from "../../project-managment/recop-project/recop-project.component";

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {

  public stepper$ : Observable<Stepper> ;

  chiff : boolean;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.stepper$=this.http.get<Stepper>('/assets/requestStepper.json');
  }
  getComponent(contentType: string): any {
    switch (contentType) {
      case 'Form':
        return FormComponent;
      case 'Features':
        return FeatureComponent;

      default:
        throw new Error(`Invalid component name: ${contentType}`);
    }
  }
}
