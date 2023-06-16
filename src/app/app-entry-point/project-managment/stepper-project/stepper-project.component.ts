import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Stepper} from "../../../../shared/generic/models/stepper.model";
import {Observable} from "rxjs";
import {FormComponent} from "../../../../shared/generic/form/form/form.component";
import {RolesComponent} from "../roles-management/roles/roles.component";
import {FeatureComponent} from "../feature-managment/feature/feature.component";
import {SkillStepperComponent} from "../../skill-stepper-management/skill-stepper/skill-stepper.component";
import {RecopProjectComponent} from "../recop-project/recop-project.component";
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-stepper-project',
  templateUrl: './stepper-project.component.html',
  styleUrls: ['./stepper-project.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class StepperProjectComponent implements OnInit {
     stepper: Stepper = {
  steps: [
    {
      title: "Project",
      order: 1,
      contentType: "Form",
      content: {
        endpoint: `${environment.baseUrl}/api/Project/add-project`,
        metaData: `${environment.baseUrl}/meta/CreateProjectCommand`,
      },
      contentforUpdate: null,
      input: true,
    },
    {
      title: "Features",
      order: 2,
      contentType: "Features",
      content: {
        endpoint: "",
        metaData: "",
      },
      contentforUpdate: null,
      input: false,
    },
    {
      title: "Roles",
      order: 3,
      contentType: "Roles",
      content: {
        endpoint: "",
        metaData: "",
      },
      contentforUpdate: null,
      input: false,
    },
    {
      title: "Skills",
      order: 4,
      contentType: "Skills",
      content: {
        endpoint: "",
        metaData: "",
      },
      contentforUpdate: null,
      input: false,
    },
    {
      title: "Recap",
      order: 5,
      contentType: "Recap",
      content: {
        endpoint: "",
        metaData: "",
      },
      contentforUpdate: null,
      input: false,
    },
  ],
  next: {
    label: "Next",
    endpoint: "",
    style: "background-color: #00b2d9;",
  },
  back: {
    label: "Back",
    endpoint: "",
    style: "background-color: #00b2d9;",
  },
  validate: {
    label: "Costing",
    endpoint: "",
    style: "background-color: #00b2d9;",
  },
  delete: {
    label: "Delete",
    endpoint: "/api/Project",
    style: "background-color: #00b2d9;",
  },
  valueDuration: 1000,
  orientation: "horizontal",
};

  chiff : boolean;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
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
