import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Stepper} from "../../../../shared/generic/models/stepper.model";
@Component({
  selector: 'app-stepper-project',
  templateUrl: './stepper-project.component.html',
  styleUrls: ['./stepper-project.component.css']
})
export class StepperProjectComponent implements OnInit {
  public stepperData!: Stepper;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
      .get('/assets/stepper.json')
      .subscribe((formData:any ) => {
        this.stepperData = formData;
      });
  }
}
