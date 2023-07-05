import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stepper } from 'src/shared/generic/models/stepper.model';
import {FormComponent} from "../../../../shared/generic/form/form/form.component";
import {FeatureComponent} from "../../project-managment/feature-managment/feature/feature.component";
import {RolesComponent} from "../../project-managment/roles-management/roles/roles.component";
import {SkillStepperComponent} from "../../skill-stepper-management/skill-stepper/skill-stepper.component";
import {RecopProjectComponent} from "../../project-managment/recop-project/recop-project.component";
import { TaskCalanderComponent } from '../task-calander/task-calander.component';
import { CalendarComponent } from 'src/shared/generic/calendar/calendar/calendar.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {

   stepper$: Stepper = {
    steps: [
      {
        title: "New Request",
        order: 1,
        contentType: "Form",
        content: {
          endpoint: `${environment.baseUrl}/api/RequestManagement`,
          metaData: `${environment.baseUrl}/meta/CreateRequestCommand`,
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
        return TaskCalanderComponent;

      default:
        throw new Error(`Invalid component name: ${contentType}`);
    }
  }
}
