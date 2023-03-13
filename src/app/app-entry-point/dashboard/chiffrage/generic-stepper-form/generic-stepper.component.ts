import {Component, Input, OnInit} from '@angular/core';


interface JsonFormStep {
  label: string;
  order: string;
  components :
   [
     {
      label: string,
      endpoint: string;
       type: string;
    }
    ]
}
interface JsonFormComponent {
  Label: string;
  endpoint: string;
}
export interface JsonFormData {
  steps: JsonFormStep[];

}
@Component({
  selector: 'app-generic-stepper',
  templateUrl: './generic-stepper.component.html',
  styleUrls: ['./generic-stepper.component.css']
})

export class GenericStepperComponent implements OnInit {
 @Input() stepperData!:JsonFormData;
  constructor() { }

  ngOnInit(): void {

  }

  config = {
    endpoint: 'https://localhost:44312/api/Permission',
    metadata: 'https://localhost:44312/meta/GetPermissionListVm',
    formdata: 'https://localhost:44312/meta/CreatePermissionCommand',
    formeditdata: 'https://localhost:44312/meta/UpdatePermissionCommand',
    pageSize: 2,
    title: 'Project Management',
    icon: 'https://img.freepik.com/premium-vector/vector-creative-project-icon-flat-style_106427-199.jpg?w=2000',
    allowedSortColumns: ['title'],
  };
}
